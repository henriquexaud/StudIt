<template>
  <div id="studentcard-container">
    <img id="icon" src="@/assets/user.png" alt="user" />
    <strong>{{ name }}</strong>
    <span> {{ eng }}</span>
  </div>
</template>

<script>
export default {
  name: "StudentCard",
  props: {
    name: String,
    eng: String,
  },
};
</script>

<style scoped>
#studentcard-container {
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

#studentcard-container:hover {
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