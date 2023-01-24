<script>
    import "./global.css";
    import Home from "./lib/pages/home/Home.svelte";

</script>

<div class="wrapper">
    <Home />
    </div>
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
