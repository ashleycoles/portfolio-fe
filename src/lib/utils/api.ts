import { API_BASE_URL } from '$env/static/private';
import { HttpStatus } from '$lib/types/HttpStatus';
import type { Post, PostExcerpt } from '$lib/types/post';

export const validateToken = async (token: string): Promise<boolean> => {
    const res = await fetch(`${API_BASE_URL}/validate`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        return false;
    }

    return true;
};

type LoginErrors = {
    emailError?: string;
    passwordError?: string;
    loginError?: string;
};

interface LoginResult {
    token?: string;
    errors?: LoginErrors;
}

export const login = async (
    email: string,
    password: string
): Promise<LoginResult> => {
    const res = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (res.status === HttpStatus.Unauthorized) {
        return {
            errors: {
                loginError: 'Incorrect Email or Password',
            },
        };
    }

    if (res.status === HttpStatus.UnprocessableEntity) {
        const data = await res.json();

        const errors: LoginErrors = {};

        if (data.errors?.email) {
            errors.emailError = 'Email Address is Invalid';
        }

        if (data.errors?.password) {
            errors.passwordError = 'Password is required';
        }

        return { errors };
    }

    return await res.json();
};

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
