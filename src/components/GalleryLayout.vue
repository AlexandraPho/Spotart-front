<template>
      <section class="related_work">
        <header>
            <h1>Oeuvres similaires sur la catégorie {{ category }}</h1>
        </header>
        <main>
            <div class="gallery">

<!--            <a class="gallery_single_image" href="#">
                    <img v-bind:src= {{artworks[0]['_links']['wp:featuremedia'][0]['href']}} v-bind:alt="artworks[0]['title'].rendered"  width="300"/>
                    </a>  -->
                <a class="gallery_single_image" href="#">
                    <img src="https://source.unsplash.com/collection/1468977&random=100"  alt="titre de l'oeuvre" width="300"/>
                    </a>  
                <a class="gallery_single_image" href="#">
                    <img src="https://source.unsplash.com/collection/61131532&random=100"  alt="titre de l'oeuvre" width="300" />
                    </a>  
                <a class="gallery_single_image" href="#">
                    <img src="https://source.unsplash.com/collection/181447&random=100"  alt="titre de l'oeuvre" width="300"/>
                    </a>  
            </div>
        </main>
    </section>
</template>

<script>

// we import the service so we can have the datas from the WP API
import ArtworksService from '@/service/ArtworksService.js';

export default {
    name: "GalleryLayout",
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
    //? carefull we are not dealing with all the errors - 404 ?
    console.log(this.categoryId);
    ArtworksService.findByCategory(this.categoryId).then(
        // We are using the find functions with the category id from the SingleArtwork view 
        (response) => {
            console.log(response.data);
            this.artworks = response.data;
        }
    );

    }
}
</script>


<style>

</style>