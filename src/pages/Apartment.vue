<template>
    <main class="apartment-page">
        <SectionWidthHeaderSpacer>
    <Container>
       <div v-if="apartment" class="apartment-page__content">
            <ApartmentsMainInfo :apartment="apartment"/> 
          <div class="apartment-page__additional-info">
            <ApartmentOwner class="apartment-page__owner" :owner="apartment.owner" />
            <Reviews :reviews="reviewsList" />
          </div>
       </div>
    </Container>
    </SectionWidthHeaderSpacer>
    </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue';
import ApartmentOwner from '../components/apartment/ApartmentOwner.vue';
import Reviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';
import SectionWidthHeaderSpacer from '../components/shared/SectionWidthHeaderSpacer.vue';
import { getApartmentById } from '../services/apartments.service';

    export default {
    name: 'ApartmentPage',
    components: {
        Container,
        ApartmentsMainInfo,
        ApartmentOwner,
        Reviews,
        SectionWidthHeaderSpacer
    },
    data() {
        return {
            apartment: null,
        }
    },
    computed: {
        reviewsList() {
            return reviewsList
        },
    },
    async created() {
        try {
            const { id } = this.$route.params;
            const { data } = await getApartmentById(id);

            this.apartment = data;
        } catch (error) {
            console.log(error);
        }
    },
    mounted() {
        
        console.log(this.apartment);
        }
    }
</script>

<style lang="scss" scoped>
.apartment-page {
    padding-bottom: 55px;

    &__content {
        display: flex;
        justify-content: space-between;
    }

    &__owner {
        min-width: 350px;
    }
}
</style>