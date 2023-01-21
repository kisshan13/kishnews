import NewsAPI from "newsapi";
import ckey from "ckey";

const kishnews = new NewsAPI(import.meta.env.VITE_API_KEY)

function api() {
    async function getHeadlines() {
        let news = await kishnews.v2.topHeadlines({ language: 'en', country: 'in' })

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

    return {getHeadlines, getByCategory}
}


console.log(import.meta.env)

export default api