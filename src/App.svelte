<script>
    import { KishAPI } from "./api/kishapi";
    import "./global.css";

    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
    const API_KEY = import.meta.env.VITE_API_KEY;
</script>

<div class="wrapper" />

<style>
    :global(html) {
        background-color: #242f40;
    }

    :global(.serif-head) {
        font-family: "Playfair Display", serif;
    }

    :global(.serif) {
        font-family: "Roboto Slab", serif;
    }

    :global(.sans) {
        font-family: "Poppins", sans-serif;
    }
</style>
