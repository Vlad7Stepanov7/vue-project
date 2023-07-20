<template>
    <AuthContainer class="registration">
        <MainTitle class="registration__title">Регистрация</MainTitle>
        <Form ref="form" @submit.prevent="handleSubmit" class="registration__form">
            <CustomInput 
                v-model="formData.name" 
                name="name" 
                autocomplete="username"
                :rules="nameRules" 
                class="login__input"
                placeholder="Name" />
            <CustomInput 
                v-model="formData.email" 
                name="email" 
                autocomplete="email"
                :rules="emailRules" 
                class="login__input"
                placeholder="Email" />
            <CustomInput 
                v-model="formData.password" 
                name="password" 
                autocomplete="current-password"
                :rules="passwordRules" 
                class="login__input"
                placeholder="Confirm password" />
            <CustomInput 
                v-model="formData.confirmPassword" 
                name="confirmPassword" 
                autocomplete="current-password"
                :rules="confirmPassword" 
                class="login__input"
                placeholder="confirmPassword" />
            <Button class="registration__button" type="submit" :loading="loading">Click me</Button>
        </Form>
    </AuthContainer>
</template>

<script>

import Form from '../../shared/form';
import CustomInput from '../../shared/CustomInput';
import Button from '../../Button';
import AuthContainer from '../../auth/AuthContainer';
import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationRules';
import MainTitle from '../../shared/MainTitle';
import { useToast } from 'vue-toast-notification';
import { mapActions } from 'vuex';

const $toast = useToast();

export default {
    name: 'Registration',
    components: {
        Form,
        CustomInput,
        Button,
        AuthContainer,
        MainTitle,
    },
    data() {
        return {
            loading: false,
            formData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    computed: {
        rules() {
            return {
                emailValidation,
                passwordValidation,
                isRequired
            };
        },
        nameRules() {
            return [this.rules.isRequired]
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation]
        },
        confirmPassword() {
            return [
                val => ({
                hasPassed: val === this.formData.password,
                message: 'Пароли не совпадают'
                })
            ]
        }
    },
    methods: {
        ...mapActions('auth', ['registerUser']),
        async handleSubmit() {
            const { email, password, name, confirmPassword } = this.formData;
            if (email === "" || password === '' || name === '' || confirmPassword === '') {
                console.log("Заполните поля");
                return
            }
            try {
                this.loading = true;
                
                await this.registerUser({ email, password, name });

                this.$router.push({ name: 'homepage' });

                let instance = $toast.success("You did it", { position: 'top' });
            } catch (error) {
                let instance = $toast.error("Error", { position: 'top' });
            } finally {
                this.loading = false;
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.registration {
    padding: 30px;
    width: 410px;
    height: 450px;
    &__button {
        margin-top: 37px;
    }
}
</style>