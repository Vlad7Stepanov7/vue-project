<template>
    <Container>
        <slot name="title"></slot>
        <div class="apartments-list">
            <template v-for="apartment in items">
            <slot name="apartment" v-bind:apartment="apartment"></slot>
            </template>
        </div>
    </Container>
</template>

<script>
import Container from "../shared/Container.vue"

export default {
    name: "AparamentsList",
    components: {
        Container
    },
    props: {
        items: {
            type: Array,
            default: () => []
        }
        }
    }
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
}
</style>