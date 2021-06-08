<template>
  <div id="app">
    <header>
      <h2>Vue Meower</h2>
      <p>Meow? 🐱‍👤</p>
    </header>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
header {
  text-align: center;
}
button,
input {
  margin-bottom: 10px;
}
</style>
