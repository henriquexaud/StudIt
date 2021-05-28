<template>
  <div id="main-container" class="main">
    <header id="header">
      <div id="text">
        <h2>Bem-vindo,</h2>
        <h2>Prof. Henrique</h2>
        <span>Escolha uma turma</span>
      </div>
      <img id="logo" alt="Vue logo" src="../assets/logo.png" />
    </header>
    <div id="card-menu">
      <Card title="Todas" />
      <Card title="EST-I" />
      <Card title="AERM-II" />
      <Card title="CDI-I" />
      <Card title="+ Adicionar matéria" />
    </div>
    <hr noshade />
    <div id="container-students">
      <StudentCard name="Renata" eng="Materiais" />
      <StudentCard name="Rodrigo" eng="Mecânica" />
      <StudentCard name="Rogério" eng="Civil" />
      <StudentCard name="Roberto" eng="Elétrica" />
      <StudentCard name="Ramires" eng="Mecânica" />
      <StudentCard name="Roberval" eng="Produção" />
      <StudentCard name="Ronaldo" eng="Mecânica" />
      <StudentCard name="Ramon" eng="Civil" />
      <StudentCard name="Ramiro" eng="Produção" />
    </div>
    <div id="card-menu">
      <a href="/" style="text-decoration: none">
        <Card title="+ Adicionar aluno" />
      </a>
      <a href="/" style="text-decoration: none">
        <Card title="Provas" />
      </a>
      <a href="/" style="text-decoration: none">
        <Card title="Matérias" />
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Card from "@/components/Card.vue";
import StudentCard from "@/components/StudentCard.vue";

export default {
  name: "Main",
  components: {
    Card,
    StudentCard,
  },
};
</script>

<style scoped>
#main-container {
  padding: 1rem;
}

#logo {
  width: 6rem;
  height: 6rem;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#text {
  text-align: left;
  line-height: 12px;
}

#card-menu {
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
}

#container-students {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
</style>