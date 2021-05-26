<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/logo.png" />
    <Welcome msg="Bem-vindo ao Studaí" />
    <Button />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Welcome,
    Button,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10rem;
}

#logo {
  height: 10rem;
  width: 10rem;
}
</style>
