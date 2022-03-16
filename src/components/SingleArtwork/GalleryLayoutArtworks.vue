<template>

    <router-link class="gallery_single_image" :to="{name: 'SingleArtwork', params: {id: id}}">
        <img v-bind:src="image" width="300"/>
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
        
    @media (max-width: 768px) {

        .gallery_single_artwork
        {
            margin: 2rem;
        }
    }
</style>