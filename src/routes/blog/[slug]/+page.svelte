<script lang="ts">
    import H1 from "$lib/components/text/H1.svelte";

    let { data } = $props();
    let { post } = data;
</script>

<svelte:head>
    <title>Ashley Coles - { post.title }</title>
</svelte:head>

<H1>{post.title}</H1>
<img src={ post.featuredImage } alt="" />
<p>{post.content}</p>
