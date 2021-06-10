<template>
  <div id="login" class="login">
    <h1>Como podemos te chamar?</h1>
    <input id="input" placeholder="Digite um nome" />

    <div>
      <a href="/usertype" style="text-decoration: none">
        <Button title="Confirmar" />
      </a>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Login",
  components: {
    Button,
  },
};
</script>

<style scoped>
#login {
  padding-top: 16rem;
}
#input {
  text-align: center;
  height: 2rem;
  font-size: 1rem;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom-width: 2px;
  width: "100%";
  outline: none;
}

#input:hover {
  border-bottom-color: rgb(42, 190, 42);
  color: rgb(23, 128, 23);
}
</style>

