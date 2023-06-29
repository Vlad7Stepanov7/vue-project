<template>
  <div id="app">
    <AppHeader/>
    <div class="content">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer.vue';
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  flex-grow: 1;
}
</style>
