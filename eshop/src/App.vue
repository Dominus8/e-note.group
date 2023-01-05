<template>
<div class="" id="app">
  <e-main-wrapper />
</div>
</template>

<script>
import eMainWrapper from "./components/e-main-wrapper.vue";

export default {
  name: 'App',
  components: {
    eMainWrapper
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
  margin-top: 60px;
}
</style>
