<script lang="ts">
    let { name, required = false } = $props();
</script>

<textarea class="border-1 border-black rounded-sm" {name} {required}></textarea>
