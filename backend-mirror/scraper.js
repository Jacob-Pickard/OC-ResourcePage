const axios = require('axios');
const cheerio = require('cheerio');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const BUCKET_NAME = 'oc-event-storage'; 
const OBJECT_KEY = 'events.json';

async function scrapeEvents() {
  try {
    const baseUrl = 'https://www.olympic.edu/events-calendar';
    let currentPage = 0;
    const events = [];

    while (true) {
      const url = `${baseUrl}?page=${currentPage}`;
      console.log(`Fetching events from: ${url}`);
      const { data: html } = await axios.get(url);
      const $ = cheerio.load(html);

      let pageHasEvents = false;

      $('.views-row').each((_, element) => {
        const title = $(element).find('.field-title a').text().trim();
        const description = $(element).find('.field-body').text().trim();
        const date = $(element).find('.views-field-field-dates-value time').attr('datetime');
        const location = $(element).find('.field-location').text().trim();
        const link = $(element).find('.field-title a').attr('href');

        if (!title) return;

        pageHasEvents = true; 

        events.push({
          title,
          description,
          date,
          location,
          link: link ? `https://www.olympic.edu${link}` : null,
        });
      });

      if (!pageHasEvents) break; 

      currentPage++; 
    }

    return events;
  } catch (error) {
    console.error('Error scraping events:', error);
    return [];
  }
}

module.exports = { scrapeEvents };

// Lambda handler for AWS Lambda
module.exports.handler = async (event, context) => {
  try {
    const events = await scrapeEvents();
    // Save to S3
    await s3.putObject({
      Bucket: 'oc-event-storage', 
      Key: 'events.json',
      Body: JSON.stringify(events),
      ContentType: 'application/json'
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Events scraped and saved to S3.' }),
    };
  } catch (error) {
    console.error('Lambda error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error scraping events", details: error.message }),
    };
  }
};