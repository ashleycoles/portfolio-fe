import { API_BASE_URL } from '$env/static/private';
import type { Post } from '$lib/types/post.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const res = await fetch(`${API_BASE_URL}/posts/${params.slug}`);

    if (res.status === 404) {
        error(404);
    }

    const data: { data: Post } = await res.json();

    const post = data.data;

    return {
        post,
    };
}
