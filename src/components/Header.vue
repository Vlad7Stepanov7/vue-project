<template>
    <header class="header">
        <Container>
            <router-link to="/">
                <Logo/>
            </router-link>
        </Container>
    </header>
</template>

<script>
import Container from '../components/shared/Container.vue';
import Logo from './Logo.vue';

    export default {
    name: 'AppHeader',
    components: {
        Container,
        Logo
    }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $secondary-color;
    padding: 16px 0;
}
</style>