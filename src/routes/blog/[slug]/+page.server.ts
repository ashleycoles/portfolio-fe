import { getPost } from '$lib/utils/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const post = await getPost(params.slug);

    if (!post.found) {
        error(404);
    }

    return {
        post: post.data,
    };
}
