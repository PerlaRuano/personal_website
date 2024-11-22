<template>
  <div class="profile">
    <header>
      <h1>Perla Ruano</h1>
  <img alt="profile" src="./assets/Perla.png">
    </header>
    <main>
      <router-view></router-view> <!-- This will render the current route's component -->
    </main>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.profile img{
  height: 250px;
}

.template{
  background-color: aquamarine;
}
</style>
