const axios = require('axios');
const cheerio = require('cheerio');

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
