<template>
    <section class="auth-section">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "AuthSection",
    }
</script>

<style lang="scss" scoped>
.auth-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url('../../images/auth.jpg');
    background-size: cover;
    background-position: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 29, 45, 0.5);
        z-index: -1;
    }
}
</style>