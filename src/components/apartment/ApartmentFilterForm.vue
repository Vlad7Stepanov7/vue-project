<template>
    <form class="form" @submit.prevent="handleSubmit">
        <CustomSelect
         v-model="city"
         :items="cities"
         class="form__select"
         />
        <CustomInput v-model="price" placeholder="Цена от"/>
        <SubmitButton type="submit">
            Подбор жилья
        </SubmitButton>
    </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import SubmitButton from '../Button.vue';

    export default {
    components: {
            CustomSelect,
            CustomInput,
            SubmitButton
    },
    data() {
        return {
            price: 0,
            city: ''
        }
    },
    computed: {
        cities() {
            return [ { value: '', label: 'Город', selected: true },'Kyiv', 'Odesa', 'Poltava', 'Kharkiv', 'Dnipro', 'Lviv', 'Kherson', 'Mariupol']
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.city, this.price);
            this.$emit('submitted', {
                city: this.city,
                price: this.price
            })
            }
        }
    }
</script>

<style lang="scss" scoped>
.form {
    display: flex;

    &__select {
        margin-right: 30px;
    }

    &__submit {
        margin-left: auto;
    }
}
</style>