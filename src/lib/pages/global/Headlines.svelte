<script>
    import { reduceText } from "../../functions/function";
    import { api } from "../../../api/kishapi";
    import { onMount } from "svelte";
    export let head;
    let dataNews =[]

    onMount( async() => {
        dataNews = await api.getHeadLines()
    })
</script>

<div class="news-conatin">

    {#await dataNews}
    <h1 class="text-[#fff]">LOADING...</h1>
    {:then data}
    {#each data as d}
    <article
    class="news bg-[#2CA58D] py-[1rem] px-[0.5rem] rounded-md max-w-[20rem] flex flex-col items-center gap-[1rem]"
>
    <div class="img-container max-w-[240px] max-h-[135px]">
        <img
            src={d.urlToImage}
            alt=""
            srcset=""
            class="w-full h-full rounded-sm"
        />
    </div>
    <h1 class="sans block text-[#DCE1E9]"> <a href="#">...read more</a>
    </h1>
</article> 
    {/each}
    {/await}
    <!-- <article
        class="news bg-[#2CA58D] py-[1rem] px-[0.5rem] rounded-md max-w-[20rem] flex flex-col items-center gap-[1rem]"
    >
        <div class="img-container max-w-[240px] max-h-[135px]">
            <img
                src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt=""
                srcset=""
                class="w-full h-full rounded-sm"
            />
        </div>
        <h1 class="sans block text-[#DCE1E9]"> <a href="#">...read more</a>
        </h1>
    </article> -->
</div>
