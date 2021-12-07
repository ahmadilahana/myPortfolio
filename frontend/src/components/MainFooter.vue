<template>
    <client-footer></client-footer>
</template>

<script>
import ClientFooter from './client/footer.vue'
export default {
    components: {
        ClientFooter
    },
    mounted(){
        console.log(this.$route.path)
    }
}
</script>