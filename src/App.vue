<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ts">Typescript</router-link> |
    <router-link to="/types">Types</router-link> |
    <router-link to="/generics">Generics</router-link> |
    <router-link to="/classes">Classes</router-link> |
    <router-link to="/itunes">Itunes</router-link> |
    <router-link to="/todos">Todos</router-link> |
    <router-link to="/openai">ChatGpt</router-link> |
  </nav>
  <router-view/>
</template>

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
</style>
