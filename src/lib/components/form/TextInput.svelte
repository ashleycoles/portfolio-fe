<script lang="ts">
    let { name, required = false } = $props();
</script>

<input
    class="border-1 border-black rounded-sm p-2"
    type="text"
    {name}
    {required}
/>
