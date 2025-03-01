<script lang="ts">
    import PostExcerpt from './PostExcerpt.svelte';
    import H2 from '../text/H2.svelte';

    let { posts } = $props();
</script>

<section aria-label="Blog posts">
    <H2>Blog</H2>
    <ul>
        {#each posts as post}
            <PostExcerpt {...post} />
        {/each}
    </ul>
</section>
