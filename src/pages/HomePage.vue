<template>
        <main class="homepage">
            <SectionWidthHeaderSpacer>
                <Container>
                    <ApartmentFilterForm @submitted="filter" class="apartments-filter" />
                </Container>
                <Container>
                    <p v-if="!filteredApartments.length">Ничего не найдено</p>
                    <ApartmentsList :items="filteredApartments">
                        <template v-slot:title>New title</template>
                        <template v-slot:apartment="{ apartment }">
                            <ApartmentsItem 
                            :key="apartment.id"
                            :id="apartment.id" 
                            :description="apartment.description" 
                            :price="apartment.price"
                            :rating="apartment.rating" 
                            :imgUrl="apartment.imgUrl" 
                            class="apartments-list__item" />
                        </template>
                    </ApartmentsList>
                </Container>
            </SectionWidthHeaderSpacer>
        </main>
</template>

<script>
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue';
import ApartmentsList from '../components/apartment/ApartmentsList.vue';
import ApartmentFilterForm from '../components/apartment/ApartmentFilterForm.vue';
import Container from '../components/shared/Container.vue';
import SectionWidthHeaderSpacer from '../components/shared/SectionWidthHeaderSpacer.vue';
import { getApartmentsList } from '../services/apartments.service';

export default {
    name: 'Homepage',
    components: {
        ApartmentsItem,
        ApartmentsList,
        ApartmentFilterForm,
        Container,
        SectionWidthHeaderSpacer
    },
    data() {
        return {
            apartments: [],
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
    async created() {
        try {
            const { data } = await getApartmentsList();
            this.apartments = data;
            console.log(data);
        } catch (error) {
            console.error(error);
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
.apartments-list__item {
    margin-bottom: 30px;
}

.apartments-filter {
    margin-bottom: 40px;
}
</style>
