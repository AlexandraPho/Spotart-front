<template>
      <section class="related_work">
        <header>
            <h1>Nos dernières Oeuvres</h1>
        </header>
        <div class="gallery">
    <GalleryLayoutArtworks v-bind:image="artwork._embedded['wp:featuredmedia'][0].source_url" v-bind:id="artwork.id" v-for="artwork in artworks.slice(0, 4)" v-bind:key="artwork.image" />
        </div>
        <br>
    </section>
</template>

<script>
import GalleryLayoutArtworks from '@/components/SingleArtwork/GalleryLayoutArtworks.vue';
import ArtworksService from '@/services/ArtworksService.js';

export default {
    name: "HomeTitle",
    
    components: { 
    GalleryLayoutArtworks
    },
    data() {
    return {
          artworks:[],
        }
    },
    mounted() {
    //? carefull we are not dealing with all the errors - 404 ?

    ArtworksService.findAll().then(response => {
    console.log(response.data);
    this.artworks = response.data;

    });
    }
    
}
</script>


<style src="@/assets/CSS/artwork.css">
</style>