import { getPosts } from '$lib/utils/api';

export async function load() {
    const posts = await getPosts();

    return {
        posts,
    };
}
