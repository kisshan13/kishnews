<script>
    import Header from "../global/Header.svelte";
    import Headlines from "../global/Headlines.svelte";
    import api from "../../../api/api";

    const kishAPI = api()
</script>

<div class="home">
    <Header />

    <main>
        <section class="news p-[1rem] mt-[3rem] flex flex-col items-center">
            <Headlines />
        </section>
    </main>
</div>