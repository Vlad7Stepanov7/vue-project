<template>
    <section class="apartment-owner">
        <h2 class="apartment-owner__title">Информация о владельце:</h2>
        <p class="apartment-owner__info">name: {{ owner.name }}</p>
        <p class="apartment-owner__info">tel: {{ owner.phone }}</p>
        <p class="apartment-owner__info">email: {{ owner.email }}</p>
    </section>
</template>

<script>
    export default {
    name: 'ApartmentOwner',
    props: {
        owner: {
            type: Object,
            required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartment-owner {
    padding: 20px;
    text-align: left;
    background-color: #E1EFFF;
    
    &__title {
      margin-bottom: 19px;
      font-weight: 700;
      line-height: 24px;
      font-size: 20px;
    }
}
</style>