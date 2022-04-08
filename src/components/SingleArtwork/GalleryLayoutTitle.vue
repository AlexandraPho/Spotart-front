<template>
      <section class="related-work">
        <div class="title">
            <h1> Autres {{ category }}s</h1>
        </div>
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
             this.artworks = response.data.slice(0,4);
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
    
    
    @media (min-width: 320px) and (max-width: 768px) {
        .related-work {
            padding: 0.5rem;
        }
        .title {
            text-align: center;
        }
        .gallery {
            /*display: flex; */
            text-align: center;
            /* flex-direction: row;*/
        }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        .related-work {
            text-align: center;
        }
        .gallery {
            margin: 1rem;
            text-align: center;
        }
        .title {
            text-align: center;
        }
    }
    @media (min-width: 1200px) {
        .related-work {
            text-align: center;
            margin: 1rem;
            padding: 1rem;
        }
        .title {
            margin-bottom: 2rem;
        }
        .gallery {
            /*margin: 1rem; */
            /*display: flex;*/
            justify-content: space-between;
            padding-bottom: 1rem;   
        }
        h1 {
            font-size: 30px;
            padding-bottom: 5px;
        }
    }
</style>