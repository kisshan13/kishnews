import { writable } from "svelte/store";
import { getHeadlines, getByCategory } from "../api/api";

function newsWritable() {
    const {subscribe, set, update} = writable()
    let newsStore;
    let newsCache = {
        cacheFor: '',
        cache: []
    };

    /**
     * 
     * @param {String} validateFor 
     * Used to validate the cache of a particular category that it is present or not.
     */
    function validateCache(validateFor) {
        if (validateFor === newsCache.cacheFor) {
            return true
        }

        return false
    }

    async function setNewsHeadline() {
        if(validateCache('headlines')) { set(newsCache.cache) }

        else {
            let news = await getHeadlines()
            set(news)
            newsCache = {
                cacheFor: 'headlines',
                cache: [newsStore.article]
            }
        }
    }
}