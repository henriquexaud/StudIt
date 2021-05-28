<template>
  <div id="card-container">
    <strong>{{ title }}</strong>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
  },
};
</script>

<style scoped>
#card-container {
  display: flex;
  flex-direction: column;
  background-color: rgb(228, 222, 222);
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  border-radius: 12px;
  padding: 1rem;
  color: #2c3e50;
}

#card-container:hover {
  background-color: rgb(155, 231, 145);
  transition-duration: 0.5s;
  cursor: pointer;
}
</style>