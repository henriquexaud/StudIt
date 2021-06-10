<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>A sala de aula no seu bolso.</p>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
