<template>
  <nav>
    <router-link to="/">Валюты</router-link> |
    <router-link to="/converter">Конвертер</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import { useStore } from "@/stores/Store";

const storeValutes = useStore();

storeValutes.getData();

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.component__input {
  width: 20%;
  margin: 0 0 1% 0;
  border: solid 2px #eeeeee;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 18px;
}
</style>
