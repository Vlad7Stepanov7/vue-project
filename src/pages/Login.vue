<template>
    <main class="login">
        <AuthSection>
            <LoginForm />
        </AuthSection>
    </main>
</template>

<script>
import LoginForm from '../components/auth/login';
import AuthSection from '../components/auth/AuthSection';
import Container from '../components/shared/Container.vue';

    export default {
    name: 'LoginPage',
    components: {
        LoginForm,
        AuthSection,
        Container
        }
    }
</script>

<style lang="scss" scoped>

</style>