<script lang="ts">
    let { name, required = false } = $props();
</script>

<input
    class="rounded-sm border-1 border-black"
    type="file"
    {name}
    {required}
    accept="image/png, image/jpeg, image/webp"
/>
