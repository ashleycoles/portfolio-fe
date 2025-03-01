import { API_BASE_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    const token = cookies.get('token');

    if (!token) {
        error(404)
    }

    const res = await fetch(`${API_BASE_URL}/validate`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        error(404)
    }
}