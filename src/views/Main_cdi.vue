//Todos screen

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
        <a href="/main" style="text-decoration: none">
          <Card title="Todas"
        /></a>
        <a href="/main_alcv" style="text-decoration: none"
          ><Card title="ALCV-I"
        /></a>
        <strong id="selected">CDI-II</strong>
        <a href="/main_pc" style="text-decoration: none"
          ><Card title="PC-II"
        /></a>
        <Card title="+ Adicionar matéria" />
      </div>
      <hr noshade />
      <div id="container-students">
        <a href="/student" style="text-decoration: none">
          <StudentCard name="Rebecca" eng="Materiais" />
        </a>
        <StudentCard name="Rogério" eng="Civil" />
        <StudentCard name="Roberto" eng="Elétrica" />
        <StudentCard name="Roberval" eng="Produção" />
        <StudentCard name="Ramon" eng="Civil" />
        <StudentCard name="Rinalda" eng="Produção" />
      </div>
      <div id="footer">
        <div id="card-menu">
          <img id="arrow" src="@/assets/right-arrow.png" alt="trash" />
          <Card title="+ Adicionar aluno" />
          <Card title="Provas" />
          <Card title="Conteúdo" />
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

#selected {
  background-color: rgb(155, 231, 145);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5px;
  border-radius: 12px;
  padding: 1rem;
  color: #2c3e50;
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
  width: 35px;
  height: 35px;
  transition-duration: 0.2s;
}
</style>