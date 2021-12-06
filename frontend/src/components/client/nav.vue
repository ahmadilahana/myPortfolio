<template>
    <b-navbar toggleable='lg' type="light" variant="white" class="fixed-top">
        <b-navbar-brand >
            <h3 class="font-weight-bold text-info">
                MY<small class="text-muted font-weight-bold">PORTFOLIO</small>
            </h3>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#home">Home</b-nav-item>
                <b-nav-item href="#about">About</b-nav-item>
                <b-nav-item href="#experience">Experience</b-nav-item>
                <b-nav-item href="#skill">Skill</b-nav-item>
                <b-nav-item href="#project">Project</b-nav-item>
                <b-nav-item href="#contact">Contact</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<style>
.nav-menu:hover{
    background: rgb(247, 246, 252);
    border-radius: .25rem !important;
}
.nav-menu a:hover{
    font-weight: bold;
}
</style>