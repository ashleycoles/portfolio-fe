import { BASE_URL } from '$lib/settings/api';
import type { PostExcerpt } from '$lib/types/post';

export async function load() {
    
    const res = await fetch(`${BASE_URL}/posts`);
    const data: { data: PostExcerpt[] } = await res.json();

    const posts: PostExcerpt[] = data.data

    return {
        posts
    }
}