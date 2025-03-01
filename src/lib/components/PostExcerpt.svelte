<script lang="ts">
    import H3 from './text/H3.svelte';

    let { id, title, slug, excerpt, featuredImage } = $props();
</script>

<li>
    <article>
        <a href="/blog/{slug}">
            <H3>{title}</H3>
            <p>{excerpt}</p>
        </a>
    </article>
</li>
