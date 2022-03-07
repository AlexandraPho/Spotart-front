<template>
    <div class="carousel">
        <div class="arrows">
            <i class="lni lni-arrow-left-circle"></i>
            <i class="lni lni-arrow-right-circle"></i>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'HomeNewsCarouselLayout',
    }

</script>

<style scoped>

    .carousel {
        width: 100vw;
        max-width: 100%;
        /* background-image: url("../images/Caspar_David_Friedrich_-_Der_Mönch_am_Meer.jpg"); */
        background-color: cadetblue;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 500px;
        box-shadow: 0px 2px #000000;
    }
    .carousel .arrows {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .carousel i {
        font-size: xxx-large;
        color: #ffde59;
        padding: 0 40px 0 40px;
        cursor: pointer;
        text-shadow: 2px 2px #000000;
    }

</style>