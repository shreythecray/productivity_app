const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let news_endpoint = "https://newsapi.org/v2/top-headlines"

    let news_params = new URLSearchParams({
        'apiKey': process.env.NEWS_API_KEY,
        'category': 'technology',
        'q': 'tailwind',
    })

    let resp = await fetch(news_endpoint + '?' + news_params, {
        method: 'GET'
    })

    let news = await resp.json()

    let news_title = "Check out: " + news.articles[0].title + " "
    let news_url = "Read more at: " + news.articles[0].url + " "
    let news_desc = "Lear more: " + news.articles[0].description + " "

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            news: news_title,
            url: news_url,
            description: news_desc
        }
    };
}