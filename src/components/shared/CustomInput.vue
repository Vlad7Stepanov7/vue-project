<template>
    <input v-on="listeners" class="custom-input">
</template>

<script>
    export default {
    name: 'CustomInput',
    computed: {
        listeners() {
            return {
                input: event => this.$emit('update:modelValue', event.target.value)
            }
            }
        }
    }
</script>

<style lang="scss" scoped>
.custom-input {
    width: 100%;
    min-width: 220px;
    min-height: 40px;
    border: 2px solid #FF662D;
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding:  8px 15px;
}
</style>