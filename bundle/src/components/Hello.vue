<template>
  <h3>
    Welcome to SSR, {{ name }}
  </h3>
</template>

<script>
export default {
  name: 'hello',
  props: [ 'name' ]
};
</script>
