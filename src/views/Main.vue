<template>
  <div id="container" class="main">
    <div id="main-container">
      <header id="header">
        <div id="text">
          <h2 id="bem-vindo">Bem-vindo,</h2>
          <h2>Prof. Henrique</h2>
          <span>Escolha uma turma</span>
        </div>
        <img id="logo" alt="Vue logo" src="../assets/logo.png" />
      </header>
      <div id="card-menu">
        <Card title="Todas" active />
        <Card title="ALCV-I" />
        <Card title="CDI-II" />
        <Card title="PC-II" />
        <Card title="+ Adicionar matéria" />
      </div>
      <hr noshade />
      <div id="container-students">
        <StudentCard name="Rebecca" eng="Materiais" />
        <StudentCard name="Rodrigo" eng="Mecânica" />
        <StudentCard name="Rogério" eng="Civil" />
        <StudentCard name="Roberto" eng="Elétrica" />
        <StudentCard name="Rincon" eng="Mecânica" />
        <StudentCard name="Roberval" eng="Produção" />
        <StudentCard name="Ronaldo" eng="Mecânica" />
        <StudentCard name="Ramon" eng="Civil" />
        <StudentCard name="Rinalda" eng="Produção" />
      </div>
      <div id="footer">
        <div id="card-menu">
          <a href="/">
            <img id="arrow" src="@/assets/right-arrow.png" alt="trash" />
          </a>
          <a href="/student" style="text-decoration: none">
            <Card title="+ Adicionar aluno" />
          </a>
          <a href="/student" style="text-decoration: none">
            <Card title="Provas" />
          </a>
          <a href="/student" style="text-decoration: none">
            <Card title="Conteúdo" />
          </a>
        </div>
        <div>
          <a href="/">
            <img id="delete" src="@/assets/trash.png" alt="trash" />
          </a>
        </div>
      </div>
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
#container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#main-container {
  padding: 1rem;
}

#logo {
  width: 5rem;
  height: 5rem;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#bem-vindo {
  color: rgb(75, 85, 95);
}

#text {
  text-align: left;
  line-height: 12px;
}

#card-menu {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#container-students {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  margin-top: 14px;
}

#footer {
  display: flex;
  justify-content: space-between;
}

#arrow {
  width: 20px;
  height: 20px;
  margin-top: 0.6rem;
  margin-right: 1rem;
  margin-left: 1rem;
  background-color: darkgrey;
  border-radius: 12px;
  padding: 10px;
}

#delete {
  width: 30px;
  height: 30px;
  padding-top: 25px;
  padding-right: 30px;
}

#delete:hover {
  width: 40px;
  height: 40px;
  transition-duration: 0.5s;
}
</style>