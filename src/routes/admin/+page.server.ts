import { HttpStatus } from '$lib/types/HttpStatus.js';
import { validateToken } from '$lib/utils/api/auth.js';
import { error } from '@sveltejs/kit';

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
