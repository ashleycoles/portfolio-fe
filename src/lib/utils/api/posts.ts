import { API_BASE_URL } from '$env/static/private';
import type { Post, PostExcerpt } from '$lib/types/post';

export const getPosts = async (): Promise<PostExcerpt[]> => {
    const res = await fetch(`${API_BASE_URL}/posts`);
    const data: { data: PostExcerpt[] } = await res.json();
    return data.data;
};

interface GetPostResult {
    found: boolean;
    data?: Post;
}

export const getPost = async (slug: string): Promise<GetPostResult> => {
    const res = await fetch(`${API_BASE_URL}/posts/${slug}`);

    if (!res.ok) {
        return {
            found: false,
        };
    }

    const data = await res.json();

    return {
        found: true,
        data: data.data,
    };
};
