<script lang="ts">
    import PostExcerpt from './PostExcerpt.svelte';

    let { posts } = $props();
</script>

<section aria-label="Blog posts">
    <ul>
        {#each posts as post}
            <PostExcerpt {...post} />
        {/each}
    </ul>
</section>
