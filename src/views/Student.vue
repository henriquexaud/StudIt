<template>
  <div id="container">
    <div id="student-container">
      <header>
        <div>
          <h1>Rebecca dos Santos</h1>
          <h3>Engenharia de Materiais</h3>
        </div>
        <img id="img" src="@/assets/user.png" alt="user" />
      </header>
      <hr noshade />
      <div id="classes">
        <ClassCard name="CDI-II" exams="5" />
        <ClassCard name="ALCV-I" exams="3" />
        <ClassCard name="PC-II" exams="4" />
      </div>
      <div id="dados-container">
        <div id="dados-left">
          <span>Média Geral: <b>7.8</b></span>
          <span>Total de provas: <b>12</b></span>
        </div>
        <div id="dados-right">
          <span>Entrou na curso em</span>
          <h1>2019</h1>
        </div>
      </div>
      <footer>
        <a href="/main" style="text-decoration: none">
          <Button title="Voltar" />
        </a>
        <div>
          <a href="/">
            <img id="delete" src="@/assets/trash.png" alt="trash" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ClassCard from "@/components/ClassCard.vue";

export default {
  name: "Student",
  components: {
    Button,
    ClassCard,
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

#student-container {
  padding: 2rem;
}

#classes {
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
}

#img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
}

header {
  display: flex;
  justify-content: space-between;
  text-align: left;
  line-height: 1rem;
  margin-bottom: 1rem;
}
header div {
  margin-right: 5rem;
}

header div h3 {
  color: rgb(77, 84, 92);
}

#dados-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#dados-left {
  text-align: left;
  line-height: 1.8rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

#dados-right {
  text-align: right;
  line-height: 0.7rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

footer {
  display: flex;
  justify-content: space-between;
}

#delete {
  width: 30px;
  height: 30px;
  padding-top: 40px;
  padding-right: 30px;
}

#delete:hover {
  width: 40px;
  height: 40px;
  transition-duration: 0.5s;
}
</style>