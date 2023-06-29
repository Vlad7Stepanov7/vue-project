<template>
    <div class="auth-container">
<slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AuthContainer',
    }
</script>

<style lang="scss" scoped>
.auth-container {
    background-color: #fff;
}
</style>