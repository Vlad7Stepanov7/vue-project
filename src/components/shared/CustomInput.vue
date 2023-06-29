<template>
    <div class="wrapper-input">
        <input 
        v-on="listeners"
        v-bind="$attrs" 
        class="custom-input"
        :class="!isValid && 'custom-input--error'"

        />
        <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
    </div>
</template>

<script>
    export default {
    name: 'CustomInput',
    data() {
        return {
            isValid: true,
            error: ''
        }
    },
    inject: {
        form: {
            default: null,
        }
    },
    inheritAttrs: false,
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
        modelValue() {
            this.validate();
        }
    },
    mounted() {
        if (!this.form) return;

        this.form.registerInput(this)
    },
    beforeDestroy() {
        if (!this.form) return;

        this.form.unRegisterInput(this)
    },
    methods: {
        validate(value) {
            this.isValid = this.rules.every(rule => {
                const { hasPassed, message } = rule(this.modelValue);

                if (!hasPassed) {
                    this.error = message || this.errorMessage;
                }

                return hasPassed;
            });
        },
        reset() {
                this.$emit('update:modelValue', '')
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper-input {
    position: relative;
    margin-top: 20px;
}
.custom-input {
    width: 100%;
    min-height: 44px;
    border: 2px solid #FF662D;
    font-size: 18px;
    line-height: inherit;
    padding:  8px 15px;

    &::placeholder {
        color: inherit;
    }

    &--error {
        border-color: red;
    }

    &__error {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        font-size: 12px;
        color: red;
        line-height: 1.3;
    }
}
</style>