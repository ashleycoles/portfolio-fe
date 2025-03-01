import { API_BASE_URL } from '$env/static/private';

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