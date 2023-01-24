import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

class KishAPI {
    constructor(apiKey, apiLink) {
        if (!apiKey) throw new KishApiError('API key is must.')
        if (!apiLink) throw new KishApiError('API link is must.')

        this.apiKey = apiKey
        this.apiLink = apiLink
    }

    getHeadLines() {
        let url = makeUrlToRequest(this.apiLink, 'top-headlines', { country: 'in', language: 'en' }, this.apiKey)

        let promise = new Promise((resolve, reject) => {
            axios.get(url).then((data) => {
                resolve(data.data)
            }).catch((e) => {
                reject(e)
            })
        })

        return promise
    }

    getByCategory(category) {
        let url = makeUrlToRequest(this.apiLink, 'top-headlines', { country: 'in', language: 'en', category: category }, this.apiKey)

        let promise = new Promise((resolve, reject) => {
            axios.get(url).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e)
            })
        })

        return promise
    }
}

class KishApiError extends Error {
    constructor(message, type) {
        super(message)
        this.name = message
        this.type = type
    }
}

function makeUrlToRequest(api, endpoint, options, apiKey) {
    let query = new URLSearchParams(options).toString()
    return query ? `${api}${endpoint}?${query}&apiKey=${apiKey}` : `${api}${endpoint}&apiKey=${apiKey}`
}


export const api = new KishAPI(API_KEY, API_ENDPOINT)