<template>
  <div id="app">
    <div class="content">
      <AppHeader/>
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
  margin-top: 60px;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
