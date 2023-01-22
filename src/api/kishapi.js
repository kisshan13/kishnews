import axios from "axios";


class KishAPI {
    constructor(apiKey, apiLink) {
        if (!apiKey) throw new KishApiError('API key is must.')
        if (!apiLink) throw new KishApiError('API link is must.')

        this.apiKey = apiKey
        this.apiLink = apiLink
    }

    getHeadLines() {
        let url = makeUrlToRequest(this.apiLink, 'top-headlines', {country: 'in', language: 'en'}, this.apiKey)

        let promise = new Promise((resolve, reject) => {
            axios.get(url).then( (data) => {
                resolve(data)
            }).catch( (e) => {
                resolve(e)
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

function makeUrlToRequest(api ,endpoint, options, apiKey) {
    let query = new URLSearchParams(options).toString()
    return query ? `${api}${endpoint}?${query}&apiKey=${apiKey}` : `${api}${endpoint}&apiKey=${apiKey}`
}


export { KishAPI }