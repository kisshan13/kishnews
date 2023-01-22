import { writable } from "svelte/store"
import axios from 'axios'

function newsWritable() {
    const {subscribe, set, update} = writable()

    let news;
    let newsCache = {
    }

    subscribe( n => news = n)

    const getHeadlines = () => {
        
    }
}