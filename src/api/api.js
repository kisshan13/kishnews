import NewsAPI from "newsapi";
import ckey from "ckey";

const kishnews = new NewsAPI(ckey.API_KEY)

async function getHeadlines () {
    let news = await kishnews.v2.topHeadlines({language: 'en', country: 'in'})

    return news
}

/**
 * 
 * @param {String} category 
 * 
 * Valid Category: `business` , `entertainment`, `general`, `health`, `science`, `sports`, `technology`.
 */
async function getByCategory(category) {
    let news = await kishnews.v2.topHeadlines({
        category: category,
        language: 'en',
        country: 'in'
    })

    return news
}

export { getHeadlines, getByCategory }
