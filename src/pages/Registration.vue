<template>
   <main class="registration">
    <AuthSection>
        <RegistrationForm />
    </AuthSection>
   </main>
</template>

<script>
import RegistrationForm from '../components/auth/registration';
import AuthSection from '../components/auth/AuthSection';

    export default {
    name: "RegistrationPage",
    components: {
        AuthSection,
        RegistrationForm
        }
    }
</script>

<style lang="scss" scoped>

</style>