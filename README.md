Log 5/12/25
    [X] Installed several packages today (express, axios, cheerio)
    [X] Setup an EC2 Backend through AWS
    [X] Setup a server.js which serves my events API
    [X] Created scraper.js (and testScraper.js to actually run it) which grabs ALL of the events (via axios) from the OC Events Calendar site by using the structuring/classnames of the title, body, and link to create our API. Cheerio parses the info from axios to create the api.
    [X] Created an async function in app.jsx to accept and parse all of the events that come in through the API
    [X] Created a function that formats the weird time format provided by the scraper, to make the user readability easier.
    [X] Short Demo Video of the scraper and API in use.

Log 5/5/25
    [2] Added an icon for the site
    [2] Add OC logo as a link the official olympic college website homepage
    [1] Relocated all of the style files to the styles folder
    [1] The favorite button will fill with a yellow/gold on hover to indicate a favorite.
    [1] Added a footer to the bottom of the website.
    [2] Updated the site to use fonts consistent with the OC homepage (Oswald, Open sans)

Log 4/28/25
    [?] Fleshed out the favoriting feature!
        - Favorites now go to the top of the page
        - Favorites are easily distinguished by a light yellow highlighting
        - Favorites are stored locally
        - The favorites category is dynamically created or removed based on if the user has a favorite resource or not.
    [1] Added hover effects to the site
    [?] Swapped the styling between the favorite and access resource buttons. 

Log - 4/22/25
    [1] Created the repository
    [2] Verified the functionality of the gh-pages workflow.
    [1] Cleared the default new-project vite layout.
    [2] Installed Tailwind as well as a few other packages.
    [3] Created a basic prototype of the website with working category filters!
    [1] Styled it to fit the OC color-palette as well as centering the title and filters.
    [3] Added links to legitimate resources and events.


Backlog
- Bugs
    [X] Favorite Button and Access
- Features
    [?] Make the cards containing the events more visually appealing, perhaps grabbing the image from the associated event/page?
    [?] Retrieve OC events dynamically. Store them in the resources folder?
    [?] Sorting feature (i.e. popular/featured)
    [?] Search function?
    [?] Allow students to rate resources?
    [?] Allow students to request to add new resources?
- Technical Debt
    [?] Determine how the scraped resources should be stored/retrieved? Is an API better for such a large amount of events? I was seeing loadtime issues when using my api, likely due to the large amount of information being retrieved.
    [?] Is the resource.js file necessary for when resources are retrieved automatically?
    [1] Add a breakpoint to fix the OC logo button clipping over the title on smaller viewports.
    [1] Add a message for when there are no resources in a category? Or something that just re-routes you to the main page.


Completed: 
- Bugs
    N/A
- Features
    [X] Installed several packages today (express, axios, cheerio)
    [X] Setup an EC2 Backend through AWS
    [X] Setup a server.js which serves my events API
    [X] Created scraper.js (and testScraper.js to actually run it) which grabs ALL of the events from the OC Events Calendar site by using the structuring/classnames of the title, body, and link to create our API.
    [X] Created an async function in app.jsx to accept and parse all of the events that come in through the API
    [X] Created a function that formats the weird time format provided by the scraper, to make the user readability easier.
    [X] Short Demo Video of the scraper and API in use.
    [3] Updated the site's overall CSS/UI with some nice new glow effects for a new favorite.
    [2] Updated the site to use fonts consistent with the OC homepage (Oswald, Open sans)
    [1] Added a footer to the bottom of the website.
    [1] The favorite button will fill with a yellow/gold on hover to indicate a favorite.
    [2] Add OC logo as a link the official olympic college website homepage
    [2] An icon for the site
    [3] Created a basic prototype of the website with working category filters!
    [1] Styled it to fit the OC color-palette as well as centering the title and filters.
    [3] Added links to legitimate resources and events.
    [3] Favoriting feature. Make the favorites actually work, and add a seperate category for them.
    [1] Added hover effects to the site
    [?] Swapped the styling between the favorite and access resource buttons. The favorite button will fill with a yellow/gold on hover to indicate a favorite.
- Technical Debt
    [1] Relocated all of the style files to the styles folder
    [2] Verified the functionality of the gh-pages workflow.
    [1] Cleared the default new-project vite layout.
    [2] Installed Tailwind as well as a few other packages.