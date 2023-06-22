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
    min-width: 220px;
    min-height: 44px;
    background-color: #FF662D;
    border: 1px solid #FF6629;
    color: #fff;
    
    &--outlined {
        background-color: none;
        border: 1px solid #FF6629;
        color: #FF6629;
    }
}
</style>