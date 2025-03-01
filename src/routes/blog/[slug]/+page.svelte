<script lang="ts">
    import H1 from "$lib/components/text/H1.svelte";

    let { data } = $props();
    let { post } = data;
</script>

<H1>{post.title}</H1>
<p>{post.content}</p>
