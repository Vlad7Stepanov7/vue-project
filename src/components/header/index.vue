<template>
    <header class="header">
        <Container>
            <div class="header__content">
                <router-link to="/">
                    <Logo />
                </router-link>
                <AccountActions v-if="isLoggedIn" />
                <AuthActions v-else />
            </div>
        </Container>
    </header>
</template>

<script>
import Container from '../shared/Container.vue';
import Logo from '../Logo.vue';
import AuthActions from './AuthActions.vue';
import AccountActions from './AccountActions.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    components: {
        Container,
        Logo,
        AuthActions,
        AccountActions
    },
    computed: {
        ...mapGetters('auth', ['isLoggedIn'])
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $secondary-color;
    padding: 16px 0;

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
