import { getPosts } from '$lib/utils/api/posts';

export async function load() {
    const posts = await getPosts();

    return {
        posts
    };
}
