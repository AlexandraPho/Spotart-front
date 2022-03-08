<template>
    <section class="latest-artworks">
        <h2>Les dernières Oeuvres</h2>
        <hr>
        <ArtworkLayout v-for="artwork in artworks" :key="artwork.title" :id="artwork.id" :imgSrc="artwork._embedded['wp:featuredmedia'][0].source_url" :imgAlt="artwork._embedded['wp:featuredmedia'][0].alt_text" :title="artwork.title.rendered" />
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
                    console.log(response.data);
                    this.artworks = response.data;
                }
            );
        },
    }
</script>