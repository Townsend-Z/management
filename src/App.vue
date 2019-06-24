<template>
  <div id="app">
    <top-nav></top-nav>
    <left-nav></left-nav>
    <main-content></main-content>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav.vue'
import TopNav from './components/TopNav.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'app',
  components: {
    LeftNav,
    TopNav,
    MainContent,
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
