import { API_BASE_URL } from '$env/static/private';
import type { PostExcerpt } from '$lib/types/post';

export const validateToken = async (token: string): Promise<boolean> => {
    const res = await fetch(`${API_BASE_URL}/validate`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        return false;
    }

    return true;
}

export const getPosts = async (): Promise<PostExcerpt[]> => {
    const res = await fetch(`${API_BASE_URL}/posts`);
    const data: { data: PostExcerpt[] } = await res.json();
    return data.data;
}