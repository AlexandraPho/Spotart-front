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
import store from '@/store/index.js';

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
    
    //console.log(this.$route.params.id); 
    FavouritesService.findFavouriteByUserID(this.$route.params.id).then(response => {
    this.artworks = response.data;
    store.commit('setUserFav', this.artworks);
    });
    }
    
}
</script>


<style scoped>
        h1::before {
            border-top: 0.2rem solid #FFDE59;
            display: block;
            position: relative;
            top: -1rem;
            margin: 0 auto;
            width: 40%;
            content: "";
        }

        .related_work {
            text-align: center;
            margin: 1rem;
        }
        
        h1 {
            font-size: 1.5rem;
        }
</style>