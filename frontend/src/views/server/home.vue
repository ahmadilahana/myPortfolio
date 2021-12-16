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
                <nav class="nav mb-3 border-bottom text-white" v-if="navBar" id="nav-menu">
                    <div class="p-2 align-self-end mb-2 rounded" v-if="navBarMenu" id="menu" @click="openmenu">
                        <font-awesome-icon icon="bars" />
                    </div>
                    <div v-if="pesan" class="d-flex" style="width: 100%" id="nav-member">
                        <div class="p-2">
                            <p class="lead m-0">ilahana</p>
                            <p class="m-0" style="font-size: 14px">ilahanapondokprogrammer@gmail.com</p>
                        </div>
                        <div class="p-2 mb-2 ml-auto align-self-end rounded" id="menu">
                            <font-awesome-icon icon="ellipsis-v" />
                        </div>
                    </div>
                </nav>
                <div v-if="pesan" class="w-100 p-3">
                    <div class="rounded bg-white p-3" style="min-height: 79vh; max-height: auto">
                        <h1>Welcome MYPorfolio</h1>
                    </div>
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
import { faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faBrandSecret } from '@fortawesome/free-brands-svg-icons'
library.add(faBars, faEllipsisV)

export default {
    data(){
        return{
            pesan: false,
            menu: false,
            navBar: false,
            navBarMenu: false
        }
    },
    methods: {
        openPesan (){
            if (window.innerWidth > 600) {
                this.pesan = true
                this.navBar = true
                document.getElementById("nav-member").style.setProperty('width', '100%')
            }else{
                this.pesan = true
                this.openmenu()
            }
        },
        openmenu (){
            if (this.menu) {
                this.menu = false
                console.log('tutup')
                var member = document.getElementById("member")
                member.style.setProperty('animation-name', 'hide');
                member.style.setProperty('animation-duration', '1s');
                member.style.setProperty('animation-fill-mode', 'forwards');
                
                setTimeout(function(){
                    member.style.setProperty('visibility', 'hidden', 'important');
                }, 700);
                if (this.pesan) {
                    document.getElementById("menu").classList.remove("order-2")
                } else {
                    document.getElementById("nav-menu").classList.remove("justify-content-end")
                }
            } else {
                this.menu = true
                console.log("buka")
                var member = document.getElementById("member")
                member.style.setProperty('visibility', 'visible', 'important');
                member.style.setProperty('animation-name', 'show');
                member.style.setProperty('animation-duration', '1s');
                if (this.pesan) {
                    document.getElementById("menu").classList.add("order-2")
                } else {
                    document.getElementById("nav-menu").classList.add("justify-content-end")
                }
            }
        },
        handleResize() {
            if (window.innerWidth > 600) {
                if (!this.menu) {
                    var member = document.getElementById("member")
                    member.style.setProperty('visibility', 'visible', 'important');
                }
                console.log('small')
                if (!this.pesan) {
                    this.navBar = false
                }
                this.navBarMenu = false
                document.getElementById("nav-member").style.setProperty('width', '100%')
            }else{
                document.getElementById("nav-member").style.setProperty('width', '92%')
                this.navBar = true
                this.navBarMenu = true
                if (!this.menu) {
                    console.log('large')
                    var member = document.getElementById("member")
                    member.style.setProperty('visibility', 'hidden', 'important');
                }
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
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
@media only screen and (min-width: 600px) {
    #member{
        visibility: visible !important;
    }
}
@media only screen and (max-width: 576px) {
    #member{
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
    #divPesan{
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>