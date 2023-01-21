<script>
    import Home from './lib/pages/home/Home.svelte';
    import './global.css'
</script>

<div class="wrapper">
    <Home />
</div>

<style>
    :global(html) {
        background-color: #242F40;
    }

    :global(.serif-head) {
        font-family: 'Playfair Display', serif;
    }

    :global(.serif){
        font-family: 'Roboto Slab', serif;
    }

    :global(.sans) {
        font-family: 'Poppins', sans-serif;
    }


</style>

