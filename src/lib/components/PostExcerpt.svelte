<script lang="ts">
    let { id, title, slug, excerpt, featuredImage } = $props();
</script>

<li>
    <article>
        <a href="/blog/{slug}">
            <h2 class="text-2xl">{title}</h2>
            <p>{excerpt}</p>
        </a>
    </article>
</li>
