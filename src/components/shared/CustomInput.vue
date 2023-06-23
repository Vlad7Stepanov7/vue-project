<template>
    <div class="wrapper-input">
        <input v-on="listeners" class="custom-input" :class="!isValid && 'custom-input--error'"/>
        <span v-if="!isValid" class="custom-input__error">{{ errorMessage }}</span>
    </div>
</template>

<script>
    export default {
    name: 'CustomInput',
    data() {
        return {
            isValid: true
        }
    },
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        errorMessage: {
            type: String,
            default: '',
        },
        rules: {
            type: Array,
            default: () => [],
        }
    },
    computed: {
        listeners() {
            return {
                input: event => this.$emit('update:modelValue', event.target.value)
            }
            }
    },
    watch: {
        modelValue(modelValue) {
            this.validate(modelValue);
            console.log(modelValue);
        }
    },
    methods: {
        validate(value) {
            this.isValid = this.rules.every(rule => rule(value));
            }
        }
    }
</script>

<style lang="scss" scoped>
.custom-input {
    min-width: 220px;
    min-height: 44px;
    border: 2px solid #FF662D;
    font-size: 18px;
    line-height: inherit;
    padding:  8px 15px;
}
</style>