<template>
  <div id="app">
    <top-nav></top-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
// import MainContent from './components/MainContent.vue'

export default {
  name: 'app',
  components: {
    TopNav,
    // MainContent,
  }
}
</script>

<style>
*{
  margin: 0;  
  padding: 0;
}
#app {
  width: 100%;
}
</style>
