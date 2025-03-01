import { API_BASE_URL, APP_MODE } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        const fetchOptons = {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch(`${API_BASE_URL}/login`, fetchOptons);

        type FormErrors = {
            emailError?: string;
            passwordError?: string;
            loginError?: string;
        };

        const validationErrors: FormErrors = {};

        if (res.status === 401) {
            validationErrors.loginError = 'Incorrect Email or Password'
            return fail(401, validationErrors)
        }

        if (res.status === 422) {
            const data = await res.json();
        
            if (data.errors?.email) {
                validationErrors.emailError = 'Email Address is Invalid'
            }

            if (data.errors?.password) {
                validationErrors.passwordError = 'Password is required'
            }

            return fail(422, validationErrors)
        }

        const data = await res.json();
        const token = data.token;

        cookies.set('token', token, {
            path: '/',
            httpOnly: true,
            secure: APP_MODE === 'production',
            maxAge: 60 * 60 * 24
        });

        redirect(302, '/admin')
    }
}