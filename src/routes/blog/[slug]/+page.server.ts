import { BASE_URL } from "$lib/settings/api";
import type { Post } from "$lib/types/post.js";

export async function load({ params }) {
    const res = await fetch(`${BASE_URL}/posts/${params.slug}`);
    const data: { data: Post } = await res.json();

    const post = data.data;

    return {
        post
    }
}