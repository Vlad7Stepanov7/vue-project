<template>
    <button 
    @click="$listeners" 
    v-bind:type="type"
    :disabled="loading"
    :class="{btn: true, 'btn--outlined': outlined}"
    >
    <CircleLoader v-if="loading" width="35" height="35" class="btn__loader"/>
    <span class="btn__content" :class="contentStyle">
        <slot></slot>
    </span>
    </button>
</template>

<script>
import CircleLoader from './loaders/Circle';

    export default {
    name: "Button",
    components: {
        CircleLoader,
    },
    props: {
        type: {
            type: String,
            default: 'button',
            required: true
        },
        outlined: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
            }
    },
    computed: {
        contentStyle() {
            return {
                'btn__content--hidden': this.loading
            }
        }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    position: relative;
    display: inline-block;
    min-width: 220px;
    min-height: 44px;
    background-color: #FF662D;
    border: 1px solid #FF6629;
    color: #fff;
    
    &:active {
        color: red;
    }
    
    &--outlined {
        background-color: none;
        border: 1px solid #FF6629;
        color: #FF6629;
    }

    &__content {
        &--hidden {
            opacity: 0;
        }
    }

    &__loader {
        position: absolute;
        top: 3px;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>