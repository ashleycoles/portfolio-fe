import { API_BASE_URL, APP_MODE } from '$env/static/private';
import { HttpStatus } from '$lib/types/HttpStatus.js';
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

        const loginResponse = await fetch(`${API_BASE_URL}/login`, fetchOptons);

        type FormErrors = {
            emailError?: string;
            passwordError?: string;
            loginError?: string;
        };

        const validationErrors: FormErrors = {};

        if (loginResponse.status === HttpStatus.Unauthorized) {
            validationErrors.loginError = 'Incorrect Email or Password'
            return fail(HttpStatus.Unauthorized, validationErrors)
        }

        if (loginResponse.status === HttpStatus.UnprocessableEntity) {
            const data = await loginResponse.json();
        
            if (data.errors?.email) {
                validationErrors.emailError = 'Email Address is Invalid'
            }

            if (data.errors?.password) {
                validationErrors.passwordError = 'Password is required'
            }

            return fail(HttpStatus.UnprocessableEntity, validationErrors)
        }

        const data = await loginResponse.json();
        const token = data.token;

        cookies.set('token', token, {
            path: '/',
            httpOnly: true,
            secure: APP_MODE === 'production',
            maxAge: 60 * 60 * 24
        });

        redirect(HttpStatus.Found, '/admin')
    }
}