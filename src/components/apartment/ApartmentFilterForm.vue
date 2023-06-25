<template>
    <form class="form" @submit.prevent="handleSubmit">
      
             <CustomSelect
             v-model="city"
             :items="cities"
             class="form__select"
             />
            <CustomInput 
            v-model="price"
            type="number"
            placeholder="Цена от"
            error-message="Не должо быть пустым"
            :rules="rules"
            />
       
        <SubmitButton type="submit" class="form__btn">
            Подбор жилья
        </SubmitButton>
    </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import SubmitButton from '../Button.vue';
import { isRequired, chartLimit } from '@/utils/validationRules';

    export default {
    components: {
            CustomSelect,
            CustomInput,
            SubmitButton
    },
    data() {
        return {
            price: "0",
            city: ''
        }
    },
    computed: {
        cities() {
            return [ { value: '', label: 'Город', selected: true },'Kyiv', 'Odesa', 'Poltava', 'Kharkiv', 'Dnipro', 'Lviv', 'Kherson', 'Mariupol']
        },
        rules() {
            return [isRequired, chartLimit(10)]
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
        margin-right: 31px;
    }

    &__submit {
        margin-left: auto;
    }

    &__btn {
    margin-left: 419px;
}
}
</style>