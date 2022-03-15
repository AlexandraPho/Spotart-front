<template>
    <section class="latest-artworks">
<<<<<<< HEAD
        <h2 class="title-section">Les dernières Oeuvres</h2>
        <hr>
        <div class="artworks-list">
=======
        <h2>Les dernières Oeuvres</h2>
        <hr><br>
        <div class="artworks">
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
            <ArtworkLayout v-for="artwork in artworks" :key="artwork.title" :id="artwork.id" :imgSrc="artwork._embedded['wp:featuredmedia'][0].source_url" :imgAlt="artwork._embedded['wp:featuredmedia'][0].alt_text" :title="artwork.title.rendered" />
        </div>
    </section>
</template>

<script>
    import ArtworksService from '@/services/ArtworksService.js';
    import ArtworkLayout from '@/components/home/ArtworkLayout.vue';

    export default {
        name: 'ArtworksListHomeLayout',
        components: {
            ArtworkLayout
        },
        data() {
            return {
                artworks: null
            }
        },
        mounted() {
            ArtworksService.findAll().then(
                (response) => {
                    console.log('Artworks', response.data);
<<<<<<< HEAD
                    this.artworks = response.data;
=======
                    this.artworks = response.data.slice(0, 4);
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
                }
            );
        },
    }
</script>

<style>

    .artworks
    {
        display: flex;
        justify-content: center;
        gap: 7vw;
        height: 30vh;
    }

    .latest-artworks img
    {
        width: 12vw;
        height: 75%;
        border-radius: 10px;
        filter: drop-shadow(0 0 0.50rem black);
    }

    .artworks h3
    {
        margin-top: 5px;
        text-align: center;
        font-size: x-large;
    }

</style>