<script lang="ts">
    import PostExcerpt from "$lib/components/PostExcerpt.svelte";

    let { data } = $props();
</script>

<ul>    
{#each data.posts as post}
    <PostExcerpt {...post} />
{/each}
</ul>