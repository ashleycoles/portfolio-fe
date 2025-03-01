<script lang="ts">
    let { name, required = false } = $props();
</script>

<input
    class="border-1 border-black rounded-sm"
    type="file"
    {name}
    {required}
    accept="image/png, image/jpeg, image/webp"
/>
