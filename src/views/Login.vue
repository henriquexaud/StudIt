<template>
  <div class="login">
    <h1>Como podemos chamar você?</h1>
    <input
      placeholder="Digite um nome"
      onBlur="{handleInputBlur}"
      onFocus="{handleInputFocus}"
      onChangeText="{handleInputChange}"
    />

    <div style="{styles.button}">
      <Button title="Confirmar" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>

