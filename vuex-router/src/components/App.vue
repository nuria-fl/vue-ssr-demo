<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/component2">Component 2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
import hello from './Hello.vue';

export default {
};
</script>
<style>
body {
  margin: 0;
  padding: 10px;
  background: #ddd;
  font-family: Avenir, sans-serif;
  text-align: center
}
</style>
