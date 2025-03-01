<script lang="ts">
    import RecentPosts from "$lib/components/RecentPosts.svelte";

    let { data } = $props();
</script>

<RecentPosts posts={data.posts} />