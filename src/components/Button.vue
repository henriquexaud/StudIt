<template>
  <div id="button-container">
    <a rel="noopener" id="button">{{ title }}</a>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
};
</script>

<style scoped>
#button-container {
  margin: 3rem;
}

#button {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  background-color: darkgreen;
  color: rgb(250, 250, 250);
  padding: 1rem;
  border-radius: 8px;
  transition-duration: 0.3s;
}

#button:hover {
  background-color: rgb(6, 141, 6);
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
}
</style>