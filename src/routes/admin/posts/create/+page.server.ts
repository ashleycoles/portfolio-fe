import { HttpStatus } from '$lib/types/HttpStatus.js';
import { validateToken } from '$lib/utils/api/auth';
import { createPost } from '$lib/utils/api/posts.js';
import { error, fail } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    const token = cookies.get('token');

    if (!token) {
        error(HttpStatus.NotFound);
    }

    const isTokenValid = await validateToken(token);

    if (!isTokenValid) {
        error(HttpStatus.NotFound);
    }
};

export const actions = {
    create: async ({ request, cookies }) => {
        const formData = await request.formData();
        const token = cookies.get('token');

        if (!token) {
            error(HttpStatus.NotFound);
        }

        const createPostResult = await createPost(formData, token);

        if (!createPostResult.success) {
            if (createPostResult.errors?.authError) {
                return error(HttpStatus.Unauthorized);
            }

            return fail(HttpStatus.UnprocessableEntity, createPostResult.errors);
        }
    }
};
