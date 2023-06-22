<template>
    <div class="apartments-item">
        
        <img :src="imgUrl" alt=""  class="apartments-item__photo"/>
        <div class="apartments-item__content">
            <p class="apartments-item__description">
                {{ description }}
            </p>
            <div class="apartments-item__rating">
                <StarRating :rating="rating"/>
            </div>
            <div class="apartments-item__price">UAN {{ price }}</div>
            <router-link 
            :to="{ name: 'apartment', params: { id } }" 
            class="apartments-item__link">
            </router-link>
            </div>
        </div>
   
</template>

<script>
import StarRating from '../StarRating.vue';

    export default {
    name: 'ApartmentsItem',
    components: {
        StarRating
    },
    props: {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        rating: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String,
            default: ''
        },
        }
    }
</script>

<style lang="scss" scoped>
.apartments-item {
    position: relative;
    width: 350px;
    height: 196px;
    margin: 15px;

    &__content {
        position: relative;
        height: 100%;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.4;
        background: rgba(#0f1d2d, 0.7);
        color: #fff;
        text-align: left;
        line-height: 1.4;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    &__description {
        margin-bottom: 20px;
        max-height: calc(1em * 1.4 * 3);
        overflow: hidden;
    }

    &__rating {
        margin-bottom: 20px;
    }

    &__price {
        font-size: 20px;
        font-weight: 600;
    }

    &__photo {
        position: absolute;
        top: 0;
        left: 0;
        width: 350px;
        height: 100%;
        object-fit: cover;
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>