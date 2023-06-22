<template>
    <section class="reviews">
        <div class="reviews__heading">
            <h2 class="reviews__title">Суммарный рейтинг</h2>
            <div class="reviews__rating">
                <span>{{ amountOfReviews }} comment</span>
                <Rating :rating="totalRating" />
            </div>
        </div>
        <ReviewsItem
        v-for="review in currentReviews"
        :key="review.author"
        :review="review"
         />
         <button @click="toggleReviews" class="reviews__show-more">{{ buttonText }}</button>
    </section>
</template>

<script>
import ReviewsItem from './reviews-item';
import Rating from '../StarRating.vue';
    export default {
    name: 'Review',
    components: {
        ReviewsItem,
        Rating
    },
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            reviewsLimit: 2
        }
    },
    computed: {
        totalRating() {
            const total = this.reviews.reduce((acc, review) => acc + review.rating, 0);
            return total / this.reviews.length
        },
        amountOfReviews() {
            return this.reviews.length;
        },
        currentReviews() {
            return this.reviews.slice(0, this.reviewsLimit);
        },
        buttonText() {
            return this.reviewsLimit === this.reviews.length ? "Cвернуть" : "Читать еще...";           
    }
    },
    methods: {
        toggleReviews() {
            if (this.reviewsLimit === this.reviews.length) {
                this.reviewsLimit = 2;
                return;
            }
            this.reviewsLimit = this.reviews.length;
    }
}
    }
</script>

<style lang="scss" scoped>
.reviews {
    margin-top: 20px;
    background-color: #E5E5E5;
    width: 350px;


    &__show-more {
        background-color: #E1EFFF;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }

    &__heading {
        padding: 10px 20px;
        background-color: #E1EFFF;
    }

    &__title {
        margin-bottom: 7px;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    }

    &__rating {
        display: flex;
        justify-content: space-between;
    }
}
</style>