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
                <nav class="nav mb-3 border-bottom text-white" id="nav-menu">
                    <div class="p-2 mb-2 border rounded" id="menu" @click="openmenu">
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
            menu: false
        }
    },
    methods: {
        openPesan (){
            this.pesan = true
            this.openmenu()
        },
        openmenu (){
            if (this.menu) {
                this.menu = false
                console.log(this.menu)
                var member = document.getElementById("member")
                member.style.setProperty('animation-name', 'hide');
                member.style.setProperty('animation-duration', '1s');
                member.style.setProperty('animation-fill-mode', 'forwards');
                
                setTimeout(function(){
                    member.style.setProperty('visibility', 'hidden', 'important');
                }, 700);
                
                document.getElementById("nav-menu").classList.remove("justify-content-end")
            } else {
                this.menu = true
                console.log(this.menu)
                var member = document.getElementById("member")
                member.style.setProperty('visibility', 'visible', 'important');
                member.style.setProperty('animation-name', 'show');
                member.style.setProperty('animation-duration', '1s');
                document.getElementById("nav-menu").classList.add("justify-content-end")
            }
        }
    }
}
</script>
<style>
@keyframes show {
  from {width: 0%; visibility: hidden}
  to {width: 80%; visibility: visible}
}
@keyframes hide {
    from {width: 80%; visibility: visible}
    to {width: 0%; visibility: hidden}
}
#menu:hover, #member div:hover{
    background-color: #626b72 !important;
    color: white !important;
    cursor: pointer;
}
#nav-menu{
    display: none !important;
}
@media only screen and (min-width: 600px) {
    #member{
        visibility: visible !important;
    }
}
@media only screen and (max-width: 576px) {
    #member{
        visibility: hidden;
        height: 100%;
        max-width: 80% !important;
        background-color: #6c757d;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: 0.5s;
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