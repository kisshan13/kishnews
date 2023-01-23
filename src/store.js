import { writable } from "svelte/store"
import axios from 'axios'

function newsWritable() {
    const {subscribe, set, update} = writable()

    let news;

    subscribe( n => news = n)

    const setHeadlines = (headlines) => {
        set(news)
        let promise = new Promise((resolve, reject) => {
            if(news) {
                resolve()
            }

            else{
                reject()
            }
        })

        return promise
    }

    return {news, setHeadlines}
}
