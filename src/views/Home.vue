<template>
  <div class="home">
    <img id="logo" alt="Vue logo" src="../assets/logo.png" />
    <Welcome msg="Bem-vindo ao Studaí" />
    <a href="/login" style="text-decoration: none">
      <Button title="Começar" />
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    Button,
  },
};
</script>

<style scoped>
#home {
  align-items: center;
  justify-content: center;
}

#logo {
  margin-top: 12rem;
  width: 5rem;
  height: 5rem;
}
</style>
