const { scrapeEvents } = require('./scraper');

(async () => {
  try {
    const events = await scrapeEvents();
    console.log('Scraped Events:', events);
  } catch (error) {
    console.error('Error testing scraper:', error);
  }
})();
