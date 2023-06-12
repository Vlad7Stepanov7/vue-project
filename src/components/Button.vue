<template>
    <button class="btn" @click="$listeners" v-bind:type="type">
        <slot></slot>
    </button>
</template>

<script>
    export default {
    name: "Button",
    props: {
        type: {
            type: String,
            default: 'button',
            required: true
        },
        outlined: {
            type: Boolean,
            default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    width: 220px;
    height: 44px;
    background: #FF662D;

    &--outlined {
        background-color: none;
        border: 1px solid #FF6629;
        color: #FF6629;
    }
}
</style>