<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view/>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'
export default {
  components: {
    MainNav
  }
}
</script>
<style>
</style>
