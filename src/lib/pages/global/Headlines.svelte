<script>
    import { onMount } from "svelte";
    import { reduceText } from "../../functions/function";
    let text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure repellat eum dolores, repudiandae nisi reprehenderit ex nam laudantium iste dicta deserunt sapiente eos, id aperiam earum veritatis adipisci fugiat nobis perferendis delectus harum! Animi cumque labore eveniet explicabo impedit quam possimus esse quod aperiam!"

        onMount( () => {
            console.log(import.meta.env)
        })
</script>

<div class="news-conatin">
    <article
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
        <h1 class="sans block text-[#DCE1E9]">
            {reduceText(text, 20)} <a href="#">...read more</a>
        </h1>
    </article>
</div>
