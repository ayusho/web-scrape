# web-scrape

## Scrapp: Scrape the web 
Scrapp is a tool to scrap the website given.

### DEMO: https://scraapp.herokuapp.com/

NOTE: Please be patient when you open the Demo link. It takes some time to load during the first startup.


To run the code:

#### Development: 
1. npm i (install the node packages in the root folder)
2. cd ./client && npm i (install the react packages in client directory)
3. npm run dev

#### Production:
1. cd ./client && npm run build (creates a build directory in client folder served as static files in the node server)
2. npm start (run node server)


#### Tech Stack

1. Backend: Node.js
2. DB: MongoDB, (ORM: Mongoose)
3. Frontend: React.js

Things to know:
1. Not all URLs provide Content-Length, Content-Encoding, Server Headers in response.
2. For few websites, scraping takes time, if you think you have waited for a long time, refresh the page and try again.
