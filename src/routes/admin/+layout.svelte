<script lang="ts">
    import Nav from '$lib/components/admin/Nav.svelte';

    let { children } = $props();
</script>

<Nav />

{@render children()}
