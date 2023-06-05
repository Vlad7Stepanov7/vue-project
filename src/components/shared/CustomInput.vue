<template>
    <input v-on="listeners" class="custom-input">
</template>

<script>
    export default {
    name: 'CustomInput',
    props: {
        text: {
            type: String,
            required: true,
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('update:text', event.target.value)
            }
            }
        }
    }
</script>

<style lang="scss" scoped>
.custom-input {
    min-height: 40px;
    border: 2px solid #FF662D;
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding:  8px 15px;
}
</style>