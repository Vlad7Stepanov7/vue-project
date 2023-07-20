<template>
    <AuthContainer class="login" >
        <MainTitle class="login__title">Логин</MainTitle>
    <Form @submit.prevent="handleSubmit" class="login__form">
        <CustomInput 
        v-model="formData.email" 
        name="email" 
        :rules="emailRules"
        class="login__input"
        placeholder="Email"
         />
        <CustomInput 
        v-model="formData.password" 
        name="password" 
        :rules="passwordRules"
        class="login__input"
         placeholder="EmailPassword"
         />
        <Button class="login__button" type="submit">Click me</Button>
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
    name: 'Login',
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
                email: '',
                password: ''
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
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation]
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
       async handleSubmit() {
            const { email, password } = this.formData;
            if (email === "" || password === '') {
                console.log("Заполните поля");
                return
            }
            try {
                this.loading = true;

                await this.login(this.formData);

                this.$router.push({ name: 'homepage' });
                let instance = $toast.success("You did it", { position: 'top' });
            } catch (error) {
                let instance = $toast.error("Error", { position: 'top' });
            } finally {
                this.loading = false
            }
        }
    },

};
</script>

<style lang="scss" scoped>
.login {
    padding: 30px;
    width: 410px;
    height: 298px;

 &__button {
    margin-top: 37px;
 }
}
</style>