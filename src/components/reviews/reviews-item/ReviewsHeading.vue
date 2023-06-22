<template>
    <div class="reviews-heading">
        <Avatar />
    <div class="reviews-heading__content">
        <p class="reviews-heading__author">{{ author }}</p>
        <Rating :rating="rating" />
    </div>
    </div>
</template>

<script>
import Rating from '../../StarRating.vue';
import Avatar from './ReviewsAvatar.vue';

export default {
    name: 'ReviewsHeading',
    components: {
        Rating,
        Avatar
    },
    props: {
        author: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            default: 0
        }
        }
    }
</script>

<style lang="scss" scoped>
.reviews-heading {
    display: flex;
    padding: 20px;

    &__content {
        margin-left: 17px;
        text-align: left;
    }
}
</style>