<template>

    <router-link class="gallery_single_image" :to="{name: 'SingleArtwork', params: {id: id}}">
        <img class="image" v-bind:src="image" width="300"/>
    </router-link>

</template>

<script>
export default {
    name: "GalleryLayoutArtworks",    
    props: {
        image: String,
        id: Number
    },
}
</script>

<style scoped>

    img:hover {
        transform: scale(1.2); 
        transition: 0.8s; 
    }
    
    img
    {
        border-radius: 10px;
        filter: drop-shadow(0 0 0.50rem black);
    }

    @media (min-width: 320px) and (max-width: 768px) {
        .gallery_single_image {
            margin: 2rem;
        }
        .image {
            margin: 1.5rem;
            width: 20%;
        }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        .image {
            /*border-radius: 10px; */
            /* filter: drop-shadow(0 0 0.50rem black); */
            margin: 1.5rem;
            width: 20%;
        }
    }
    @media (min-width: 1200px) {
        .gallery_single_image {
            margin: 2rem;
        }
        .image {
            margin: 1.5rem;
        }
    }
</style>