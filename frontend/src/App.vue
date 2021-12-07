<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'
import MainFooter from './components/MainFooter.vue'
export default {
  components: {
    MainNav,
    MainFooter
  }
}
</script>
<style>
</style>
