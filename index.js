const request = require('request');
const cheerio = require('cheerio');

request('https://github.com/RitwickBhargav', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.mr-3').each((i, el) => {
            const item = $(el).find('span').text();
            console.log(item);
        });
    }
});
