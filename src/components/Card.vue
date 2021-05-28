<template>
  <div id="card-container">
    {{ title }}
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
  background-color: rgb(228, 222, 222);
  width: 100px;
  height: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  border-radius: 12px;
  padding-top: 2.5rem;
}

#card-container:hover {
  background-color: rgb(155, 231, 145);
  transition-duration: 0.5s;
  cursor: pointer;
}
</style>