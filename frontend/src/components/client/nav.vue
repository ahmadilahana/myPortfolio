<template>
    <b-nav>
        <b-nav-item>
            <h3>
                MY<small class="text-muted">PORTFOLIO</small>
            </h3>
        </b-nav-item>
        <b-nav-item class="align-self-center nav-menu">Active</b-nav-item>
        <b-nav-item class="align-self-center nav-menu">Link</b-nav-item>
        <b-nav-item class="align-self-center nav-menu">Another Link</b-nav-item>
        <b-nav-item class="align-self-center nav-menu">Disabled</b-nav-item>
    </b-nav>
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