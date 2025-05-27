const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const BUCKET_NAME = 'oc-event-storage';
const OBJECT_KEY = 'events.json';

exports.handler = async (event, context) => {
  try {
    const data = await s3.getObject({
      Bucket: 'oc-event-storage',
      Key: 'events.json'
    }).promise();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: data.Body.toString('utf-8'),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error loading events from S3", details: error.message }),
    };
  }
};
