<template>
    <h1 class="title">{{ title }}</h1>
    <div class="artist-detail-container">
        <p class="border-artist"></p>
        <p class="text" v-html="content"></p>
        <!-- <div class="media-details" v-bind:style="'background-image:url(' + image + ')'">    
        </div> -->
        <img class="media-details" :src="imgSrc" :alt="imgAlt">
        <section class="artist">
        </section>
    </div>
</template>

<script>

    export default {
        name: 'ArtistDetailLayout',
        props: {
            title: String,
            content: String,
            /* image: String, */
            imgSrc: String,
            imgAlt: String,
            id: Number
        }
    }
</script>

<style scoped>

    .artist-detail-container
    {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1::after
    {
        border-top: 0.2rem solid #FFDE59;
        display: block;
        position: relative;
        top: 0.5rem;
        margin: 0 auto;
        width: 10%;
        content: "";
    }

    h1
    {
        text-align: center;
        font-size: xx-large;
    }

    p
    {
        margin: 0 0 20px 0;
    }

    .text
    {
        font-size: 20px;
        margin: 0 300px 0 300px;
        text-align: center;
    }

    .media-details
    {
        width: 30vw;
        height: 65vh;
        border: solid black 1px;
        border-radius: 10px;
        margin-bottom: 50px;
        margin-top: 30px;
    }

</style>