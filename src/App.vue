<template>
  <ApartmentsItem
  :description="apartment.description"
  :price="apartment.price"
  :rating="apartment.rating"
  
  />
</template>

<script>
import StarRating from './components/StarRating.vue';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';

export default {
  name: 'App',
  components: {
    ApartmentsItem,
    StarRating
  },
  data() {
    return {
      apartment: {
        id: `1`,
        title: "AAAAAAAAAAAAAA",
        description: "BBBBBBBBBBBB",
        price: 2200,
        rating: 4.7,
        location: {
          city: "Dnipro",
        },
        owner: {
          name: "Elien",
          phone: "115-355-5652",
          email: "Elien@gamil.com"
        }
      }
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
</style>
