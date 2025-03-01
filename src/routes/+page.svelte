<script lang="ts">
    import RecentPosts from "$lib/components/RecentPosts.svelte";

    let { data } = $props();
    let { posts } = data;
</script>

<svelte:head>
    <title>Ashley Coles</title>
</svelte:head>

<RecentPosts {posts} />