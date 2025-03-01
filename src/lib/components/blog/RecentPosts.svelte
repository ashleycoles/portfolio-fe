<script lang="ts">
    import PostExcerpt from './PostExcerpt.svelte';
    import H2 from '../text/H2.svelte';
    import Container from '../containers/Container.svelte';

    let { posts } = $props();
</script>

<section aria-label="Blog posts" class="bg-background-alt dark:bg-background-alt-dark mt-10 py-16">
    <Container>
        <H2>Blog</H2>
    </Container>
    <ul>
        {#each posts as post (post.id)}
            <PostExcerpt {...post} />
        {/each}
    </ul>
</section>
