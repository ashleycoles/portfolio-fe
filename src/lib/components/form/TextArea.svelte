<script lang="ts">
    let { name, required = false } = $props();
</script>

<textarea class="rounded-sm border-1 border-black" {name} {required}></textarea>
