<script lang="ts">
    import { dateFormat } from '$lib/utils/dateFormat';
    import Container from '../containers/Container.svelte';
    import H3 from '../text/H3.svelte';

    let { title, slug, excerpt, created_at } = $props();

    const formattedDate = dateFormat(created_at);
</script>

<li>
    <article class="dark:hover:bg-background-dark py-8 transition-colors hover:bg-gray-100">
        <a href="/blog/{slug}">
            <Container>
                <div class="mb-4 flex flex-col items-start gap-3 sm:flex-row-reverse sm:items-center sm:justify-end">
                    <div class="bg-highlight dark:bg-highlight-dark px-2 py-0.5 text-white dark:text-black">
                        <H3>{title}</H3>
                    </div>

                    <time datetime={formattedDate} class="text-xl">
                        {formattedDate}
                    </time>
                </div>

                <p>{excerpt}</p>
            </Container>
        </a>
    </article>
</li>
