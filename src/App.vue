<template>
  <div id="app">
 
    <Container>
      <ApartmentFilterForm @submitted="filter" class="apartments-filter" />
    </Container>
    <p v-if="!filteredApartments.length">Ничего не найдено</p>
    <ApartmentsList :items="filteredApartments">
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
import apartments from './components/apartment/apartments';
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';
import Container from './components/shared/Container.vue';

export default {
  name: 'App',
  components: {
    ApartmentsItem,
    ApartmentsList,
    ApartmentFilterForm,
    Container
  },
  data() {
    return {
      apartments,
      filters: {
        city: '',
        price: 0
      }
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments))
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      
      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city
      })
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price
      })
    }
  }
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
.apartments-filter {
  margin-bottom: 40px;
}
</style>
