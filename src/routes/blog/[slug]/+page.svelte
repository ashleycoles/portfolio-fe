<script lang="ts">
    let { data } = $props();
    let { post } = data;
</script>

<h1>{post.title}</h1>
<p>{post.content}</p>
