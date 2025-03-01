<script lang="ts">
    import ImageInput from "$lib/components/form/ImageInput.svelte";
    import Label from "$lib/components/form/Label.svelte";
    import Submit from "$lib/components/form/Submit.svelte";
    import TextArea from "$lib/components/form/TextArea.svelte";
import TextInput from "$lib/components/form/TextInput.svelte";
import H1 from "$lib/components/text/H1.svelte";


</script>

<svelte:head>
    <title>Create Post</title>
</svelte:head>

<H1>Create new post</H1>

<form method="POST" action="?/create">
    <Label>
        <div>Title</div>
        <TextInput name='title' required={true} />
    </Label>

    <Label>
        <div>Slug</div>
        <TextInput name='slug' required={true} />
    </Label>

    <Label>
        <div>Excerpt</div>
        <TextArea name='excerpt' required={true} />
    </Label>

    <Label>
        <div>Content</div>
        <TextArea name='content' required={true} />
    </Label>

    <Label>
        <div>Featured Image</div>
        <ImageInput name='featuredImage' required={true} />
    </Label>

    <Submit value='Save' />
    
</form>