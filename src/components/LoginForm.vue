<template>
    <form @submit.prevent="handleSunmit">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <div class="error">{{ error }}</div>
        <button>Login</button>
    </form>
</template>

<script>
    import { ref } from 'vue'
    import useLogin from '../composables/useLogin'

    export default {
        setup (props, context) {
            // refs
            const email = ref('')
            const password = ref('')

            const { error, login } = useLogin()

            const handleSunmit = async () => {
                await login(email.value, password.value)
                if (!error.value) {
                    context.emit('login')
                }
            }

            return { email, password, handleSunmit, error }
        }
    }
</script>

<style>

</style>