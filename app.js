const { LinkedInProfileScraper } = require('linkedin-profile-scraper');
 
(async() => {
  const scraper = new LinkedInProfileScraper({
      sessionCookieValue: 'AQEDARCihEEEyZ7rAAABgXZvbcsAAAGHe3PHtE0ARwQqfIYBdicGCcZMHQYd68tvj7Jj7SgPaZvvcPjV5ZwwTPhfecfgooIfIb5sm9Gg_fYKH40aYBTvQ5zUOm7wj5n9y5dCRAi_GLAk3Sg2DjInDN_-',
    keepAlive: false
  });
 
  // Prepare the scraper
  // Loading it in memory
  await scraper.setup()
 
    const result = await scraper.run('https://www.linkedin.com/in/liudmilashurupova/')
  
  console.log(result)
})()