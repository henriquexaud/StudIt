<template>
  <div id="login" class="login">
    <h1>O que você é?</h1>

    <div id="cards">
      <Card title="Professor" />
      <Card title="Aluno" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "UserType",
  components: {
    Card,
  },
};
</script>

<style scoped>
#login {
  padding-top: 16rem;
}
#cards {
  justify-content: center;
  display: flex;
  flex-direction: row;
}
</style>
