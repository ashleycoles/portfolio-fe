import { API_BASE_URL } from '$env/static/private';
import { HttpStatus } from '$lib/types/HttpStatus';
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
            found: false
        };
    }

    const data = await res.json();

    return {
        found: true,
        data: data.data
    };
};

type CreatePostErrors = {
    titleError?: string;
    slugError?: string;
    excerptError?: string;
    contentError?: string;
    featuredImageError?: string;
    authError?: string;
};

interface CreatePostResult {
    success: boolean;
    errors?: CreatePostErrors;
}

export const createPost = async (formData: FormData, token: string): Promise<CreatePostResult> => {
    const res = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        body: formData,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    if (res.status === HttpStatus.Unauthorized) {
        return {
            success: false,
            errors: {
                authError: 'Not Authenticated'
            }
        };
    }

    if (res.status === HttpStatus.UnprocessableEntity) {
        const data = await res.json();

        const errors: CreatePostErrors = {};

        if (data.errors?.title) {
            errors.titleError = data.errors.title;
        }

        if (data.errors?.slug) {
            errors.slugError = data.errors.slug;
        }

        if (data.errors?.excerpt) {
            errors.excerptError = data.errors.excerpt;
        }

        if (data.errors?.content) {
            errors.contentError = data.errors.content;
        }

        if (data.errors?.featuredImage) {
            errors.featuredImageError = data.errors.featuredImage;
        }

        return {
            success: false,
            errors
        };
    }
    return await res.json();
};
