import { API_BASE_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
    login: async ({ request }) => {
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
        console.log(data)
        const token = data.token;
    }
}