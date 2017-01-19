<template>
  <div>
    <h1>{{message}}</h1>
    <h2>What's your name?</h2>
    <input type="text" name="" v-model="name">
    <hello v-show="name" :name="name"></hello>
  </div>
</template>
<script>
import hello from './Hello.vue';

export default {
  components: {
    hello,
  },
  data() {
    return {
      message: 'Hello world',
      name: '',
    }
  }
};
</script>
