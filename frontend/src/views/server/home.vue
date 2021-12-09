<template>
    <div class="container bg-primary border" style="min-height: 650px">
        <div class="row" style="min-height: 650px">
            <div class="col-4 d-flex flex-column border-right py-3" id="member">
                <div class="p-2 pl-4 mb-2 border-bottom rounded">
                    <p class="lead m-0">nama</p>
                    <p class="m-0">email</p>
                </div>
                <div class="p-2 pl-4 mb-2 border-bottom rounded">
                    <p class="lead m-0">nama</p>
                    <p class="m-0">email</p>
                </div>
            </div>
            <div class="col-8 d-flex align-items-center">
                <div class="d-flex h-100 w-100 text-white justify-content-center">
                    <h1>Welcome MYPorfolio</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {

    }
}
</script>
<style>
#member div{
    background-color: white;
}
#member div:hover{
    background-color: lightsteelblue;
    color: white;
    cursor: pointer;
}
</style>