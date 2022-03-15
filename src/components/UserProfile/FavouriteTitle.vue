<template>
      <section class="related_work">
        <header>
            <h1>Vos Oeuvres favorites</h1>
        </header>
        <div class="gallery">
    <GalleryLayoutArtworks v-bind:image="artwork['url']" v-bind:id="artwork['ID']" v-for="artwork in artworks" v-bind:key="artwork.image" />
        </div>
    </section>
</template>

<script>
import GalleryLayoutArtworks from '@/components/SingleArtwork/GalleryLayoutArtworks.vue';
import FavouritesService from '@/services/FavouritesService.js';

export default {
    name: "FavouriteTitle",
    
    components: { 
    GalleryLayoutArtworks
    },
    data() {
    return {
          artworks:null
        }
    },
    mounted() {
    //? carefull we are not dealing with all the errors - 404 ?
    console.log(this.$route.params.id); 
    FavouritesService.findFavouriteByUserID(this.$route.params.id).then(response => {
    this.artworks = response.data;

    });
    }
    
}
</script>