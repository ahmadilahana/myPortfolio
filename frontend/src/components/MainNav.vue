<template>
    <client-nav></client-nav>
</template>

<script>
import ClientNav from './client/nav.vue'
export default {
    components: {
        ClientNav
    },
    mounted(){
        console.log(this.$route.path)
    }
}
</script>