import type { PostExcerpt } from '$lib/types/post';

export async function load() {
    const res = await fetch('http://localhost/api/posts');
    const data: { data: PostExcerpt[] } = await res.json();

    const posts: PostExcerpt[] = data.data

    return {
        posts
    }
}