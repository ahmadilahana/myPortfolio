<template>
    <client-nav v-if="server"></client-nav>
</template>

<script>
import ClientNav from './client/nav.vue'
export default {
    components: {
        ClientNav
    },
    data(){
        return{
            server: true
        }
    },
    created(){
        const url = this.$route.path
        const urlServer = url.split("/")[1]
        if (urlServer == "server") {
            this.server = false
        } else {
            this.server = true            
        }
        // console.log(urlServer)
    }
}
</script>