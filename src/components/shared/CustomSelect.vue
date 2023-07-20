<template>
    <select v-on="listeners" class="custom-select">
        <option 
        v-for="item in formatedItems" 
        :value="item.value"
        :key="item.value"
        >
            {{ item.label }}
        </option>
    </select>
</template>

<script>
    export default {
    name: 'CustomSelect',
    props: {
        items: Array,
        required: true
    },
    computed: {
        listeners() {
            return {
                input: event => this.$emit('update:modelValue', event.target.value)
            }
        },
        formatedItems() {
            return this.items.map(item => {
                return typeof item === 'object'
                    ? item
                    : { value: item, label: item }
            })
        }
    }
    }
</script>

<style lang="scss" scoped>
.custom-select {
    display: inline-block;
    min-width: 220px;
    height: 44px;
    border: 2px solid #FF662D;
    font-size: 18px;
    padding: 8px 15px;
    cursor: pointer;
}
</style>