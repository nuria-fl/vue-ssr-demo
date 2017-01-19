<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" v-on:click="increment">Increment</button>
    <p>State: {{count}}</p>
  </div>
</template>

<script>
export default {
  name: 'counting',
  data () {
    return {
        msg: 'Counting!'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>
