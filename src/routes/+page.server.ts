import { API_BASE_URL } from '$env/static/private';
import type { PostExcerpt } from '$lib/types/post';

export async function load() {
    const res = await fetch(`${API_BASE_URL}/posts`);
    const data: { data: PostExcerpt[] } = await res.json();

    const posts = data.data;

    return {
        posts,
    };
}
