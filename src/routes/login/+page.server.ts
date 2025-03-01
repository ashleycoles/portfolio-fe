import { API_BASE_URL, APP_MODE } from '$env/static/private';
import { HttpStatus } from '$lib/types/HttpStatus.js';
import { login } from '$lib/utils/api.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const loginResult = await login(email, password);

        console.log(loginResult)

        if (loginResult.errors) {
            const errors = loginResult.errors;

            if (errors.loginError) {
                return fail(HttpStatus.Unauthorized, {loginError: loginResult.errors.loginError})
            }

            const validationErrors: {emailError?: string, passwordError?: string} = {}

            if (errors.emailError) {
                validationErrors.emailError = 'Email Address is Invalid'
            }

            if (errors.passwordError) {
                validationErrors.passwordError = 'Password is required'

            }
            return fail(HttpStatus.UnprocessableEntity, validationErrors)
        }

        if (!loginResult.token) {
            return fail(HttpStatus.InternalServerError)
        }

        cookies.set('token', loginResult.token, {
            path: '/',
            httpOnly: true,
            secure: APP_MODE === 'production',
            maxAge: 60 * 60 * 24
        });

        redirect(HttpStatus.Found, '/admin')
    }
}