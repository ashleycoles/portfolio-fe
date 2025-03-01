<script lang="ts">
    let { form } = $props();
</script>

<form method="POST" action="?/login">
    <label>
        Email
        <input type="email" name="email" required />
    </label>

    {#if form?.emailError}
		<p>{form.emailError}</p>
	{/if}

    <label>
        Password
        <input type="password" name="password" required />
    </label>

    {#if form?.passwordError}
		<p>{form.passwordError}</p>
	{/if}

    <input type="submit" value="Login" />

    {#if form?.loginError}
		<p>{form.loginError}</p>
	{/if}
</form>