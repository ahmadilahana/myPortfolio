<template>
<div>
    <div class="container-fluid text-center pl-0 pr-0" style="background-color: #1dcaff" id="home">
        <img src="../../asset/img/img-1.jpg" class="rounded-circle" style="border: 4px solid white" height="150px" width="150px" alt="">
        <h1 class="display-5 text-light font-weight-bold">Ahmat Arif Ilahana</h1>
        <div class="d-flex justify-content-center">
            <p class="lead text-light">Fullstack Web Developer | ilahanapondokprogrammer@gmail.com | 
                <a class="lead" id="link-github" target="_blank" href="https://github.com/ahmadilahana">Github</a>
            </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L0,64L36.9,64L36.9,160L73.8,160L73.8,256L110.8,256L110.8,288L147.7,288L147.7,192L184.6,192L184.6,192L221.5,192L221.5,96L258.5,96L258.5,64L295.4,64L295.4,192L332.3,192L332.3,96L369.2,96L369.2,256L406.2,256L406.2,64L443.1,64L443.1,256L480,256L480,96L516.9,96L516.9,192L553.8,192L553.8,160L590.8,160L590.8,224L627.7,224L627.7,32L664.6,32L664.6,64L701.5,64L701.5,288L738.5,288L738.5,64L775.4,64L775.4,192L812.3,192L812.3,192L849.2,192L849.2,128L886.2,128L886.2,256L923.1,256L923.1,96L960,96L960,96L996.9,96L996.9,224L1033.8,224L1033.8,96L1070.8,96L1070.8,64L1107.7,64L1107.7,128L1144.6,128L1144.6,96L1181.5,96L1181.5,288L1218.5,288L1218.5,32L1255.4,32L1255.4,64L1292.3,64L1292.3,160L1329.2,160L1329.2,32L1366.2,32L1366.2,32L1403.1,32L1403.1,192L1440,192L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>
    </div>
    <div class="container-fluid pl-0 pr-0" id="about">
        <div class="row">
            <div class="col text-center">
                <h3 class="font-weight-bold">About Me</h3>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-md-4">
                <p class="lead text-center">Saya adalah seorang lulusan teknik informatika yang memiliki semangat kerja dan motivasi
tinggi, mampu mempelajari hal-hal baru dengan cepat, disiplin, bertanggung jawab dan mampu
bekerja secara tim atau individu.</p>
            </div>
            <div class="col-md-4">
                <p class="lead text-center">Saya sangat tertarik dengan perkembangan teknologi, karena alasan ini saya terjun di dunia programmer terutama pemrogramman web. Keinginan saya adalah dapat menguasai berbagai macam bahasa pemrograman.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    metaInfo: {
        title: 'MyPortfolio - Home'
    }
}
</script>

<style>

#link-github{
    color: #f8f9fa !important;
}

.container-fluid{
    padding-top: 6rem;
}
</style>