import { API_BASE_URL } from '$env/static/private';
import { HttpStatus } from '$lib/types/HttpStatus.js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    const token = cookies.get('token');

    if (!token) {
        error(HttpStatus.NotFound)
    }

    const res = await fetch(`${API_BASE_URL}/validate`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        error(HttpStatus.NotFound)
    }
}