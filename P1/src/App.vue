<template>
  <Navigation></Navigation>
  <img alt="Vue logo" id="vueImg" src="./assets/logo.png">
  <main>
    <div>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Navigation from './router/Navigation.vue'

export default {
  name: 'App', //This name will show up in the developer tools
  components: {
    Navigation
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  } #vueImg {
    height: 10%;
    max-height: 100px;
  } main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 50px;
  } main > div {
    max-width: 1200px;
  }
</style>
