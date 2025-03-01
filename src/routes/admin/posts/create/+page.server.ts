export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        
        const title = formData.get('title') as string;
        const slug = formData.get('slug') as string;
        const excerpt = formData.get('excerpt') as string;
        const content = formData.get('content') as string;
        const featuredImage = formData.get('featuredImage');

        console.log({title, slug, excerpt, content, featuredImage})

    }
}