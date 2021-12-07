<template>
    <client-footer v-if="server"></client-footer>
</template>

<script>
import ClientFooter from './client/footer.vue'
export default {
    components: {
        ClientFooter
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