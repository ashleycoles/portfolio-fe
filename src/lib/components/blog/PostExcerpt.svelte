<script lang="ts">
    import { dateFormat } from '$lib/utils/dateFormat';
    import Container from '../containers/Container.svelte';
    import H3 from '../text/H3.svelte';

    let { title, slug, excerpt, created_at } = $props();

    const formattedDate = dateFormat(created_at);
</script>

<li>
    <article class="hover:bg-gray-100 dark:hover:bg-background-dark py-8 transition-colors">
        <a href="/blog/{slug}">
            <Container>
                <div class="flex flex-col sm:flex-row-reverse items-start sm:items-center sm:justify-end gap-3 mb-4">
                    <div class="bg-highlight text-white dark:bg-highlight-dark dark:text-black px-2 py-0.5">
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
