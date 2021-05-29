<template>
  <div id="classcard-container">
    <img id="icon" src="@/assets/books.png" alt="user" />
    <strong>{{ name }}</strong>
    <span> Provas: {{ exams }}</span>
  </div>
</template>

<script>
export default {
  name: "ClassCard",
  props: {
    name: String,
    exams: String,
  },
};
</script>

<style scoped>
#classcard-container {
  display: flex;
  flex-direction: column;
  width: 150px;
  background-color: rgb(228, 222, 222);
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  border-radius: 12px;
  padding: 1rem;
  color: #2c3e50;
}

#classcard-container:hover {
  background-color: rgb(155, 231, 145);
  transition-duration: 0.5s;
  cursor: pointer;
}

#icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.4rem;
}
</style>