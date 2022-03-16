<template>
      <section class="related_work">
        <header>
            <h1>Dernières oeuvres de la catégorie {{ category }}</h1>
        </header>
        <div class="gallery">
    <GalleryLayoutArtworks v-bind:image="artwork._embedded['wp:featuredmedia'][0].source_url" v-bind:id="artwork.id" v-bind:title="artwork.slug" v-for="artwork in artworks" v-bind:key="artwork.id" />
        </div>
    </section>
</template>

<script>
import GalleryLayoutArtworks from '@/components/SingleArtwork/GalleryLayoutArtworks.vue';
// we import the service so we can have the datas from the WP API
import ArtworksService from '@/services/ArtworksService.js';

export default {
    name: "GalleryLayoutTitle",
    
    components: { 
    GalleryLayoutArtworks
    },
    
    props: {
        categoryId: Number,
        category: String
    },

    data() {
    return {
          artworks:null
        }
    },
    mounted() {
    console.log(this.categoryId);
    console.log(this.category);
    ArtworksService.findByCategory(this.categoryId).then(
         // We are using the find functions with the category id from the SingleArtwork view 
         (response) => {
             console.log(response.data);
             this.artworks = response.data;
         });             
    },
    beforeRouteUpdate(to) {
         console.log(to.params.id);
    
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

    @media (min-width: 768px) {
        .gallery {
            margin: 1rem;
            display: flex;
            justify-content: space-evenly; 
        }
    }
    
    @media (max-width: 768px) {
        .gallery {
           display: block;
        }
    }

</style>