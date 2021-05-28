<template>
  <div id="login" class="login">
    <div id="cards">
      <h1>Você é</h1>
      <a class="type" href="/main" style="text-decoration: none">
        <Card title="Professor" />
      </a>
      <h1>ou</h1>
      <a class="type" href="/main" style="text-decoration: none">
        <Card title="Aluno" />
      </a>
      <h1>?</h1>
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
  padding-top: 18rem;
}
#cards {
  justify-content: center;
  display: flex;
  flex-direction: row;
}

.type {
  margin-top: 0.5rem;
}
</style>
