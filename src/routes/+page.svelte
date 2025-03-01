<script lang="ts">
    import RecentPosts from "$lib/components/RecentPosts.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Ashley Coles</title>
</svelte:head>

<RecentPosts posts={data.posts} />