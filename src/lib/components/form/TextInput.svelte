<script lang="ts">
    let { name, required = false } = $props();
</script>

<input class="rounded-sm border-1 border-black p-2" type="text" {name} {required} />
