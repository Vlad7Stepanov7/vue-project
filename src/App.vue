<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <CustomSelect :items="['name', 'label', 'salary']" />
    <CustomInput v-model:text="text"/>
    
    <ApartmentsList :items="apartaments">
      <template v-slot:title>New title</template>
      <template v-slot:apartment="{ apartment }">
      <ApartmentsItem
              :key="apartment.id"
              :description="apartment.description"
              :price="apartment.price"
              :rating="apartment.rating"
              :imgSrc="apartment.imgSrc"
              class="apartments-list__item"
              />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import apartaments from './components/apartment/apartaments';
import CustomInput from './components/shared/CustomInput.vue';
import CustomSelect from './components/shared/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    ApartmentsItem,
    ApartmentsList,
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      apartaments,
      text: '',
    }
  },
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.apartments-list__item {
        margin-bottom: 30px;
    }
</style>
