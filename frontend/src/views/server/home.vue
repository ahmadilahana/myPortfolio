<template>
    <div class="container-fluid bg-secondary border py-0 px-4" style="min-height: 650px">
        <div class="row" style="min-height: 650px">
            <div class="col-3 d-flex flex-column border-right py-3" id="member">
                <div class="p-2 pl-3 mb-2 border-bottom text-white rounded" @click="openPesan">
                    <p class="lead m-0">nama</p>
                    <p class="m-0">email</p>
                </div>
                <div class="p-2 pl-3 mb-2 border-bottom text-white rounded">
                    <p class="lead m-0">nama</p>
                    <p class="m-0">email</p>
                </div>
            </div>
            <div class="col-9 p-3" id="divPesan">
                <nav class="nav border-bottom text-white" id="nav-menu">
                    <div class="p-2 mb-2 border rounded" id="menu">
                        <font-awesome-icon icon="bars" />
                    </div>
                </nav>
                <div v-if="pesan" class="h-100 w-100 p-3 text-dark bg-white rounded">
                    <h1>Welcome MYPorfolio</h1>
                </div>
                <div v-else class="d-flex h-100 w-100 text-white align-items-center justify-content-center">
                    <h1>Welcome MYPorfolio</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBrandSecret } from '@fortawesome/free-brands-svg-icons'
library.add(faBars)
export default {
    data(){
        return{
            pesan: false,
        }
    },
    methods: {
        openPesan (){
            this.pesan = true
        }
    }
}
</script>
<style>
#menu:hover, #member div:hover{
    background-color: #626b72 !important;
    color: white !important;
    cursor: pointer;
}
#nav-menu{
    display: none !important;
}
@media only screen and (max-width: 576px) {
    #member{
        display: none !important;
    }
    #nav-menu{
        display: flex !important;
    }
    #divPesan{
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>