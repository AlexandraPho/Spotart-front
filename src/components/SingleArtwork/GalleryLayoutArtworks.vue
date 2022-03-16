<template>

<router-link class="gallery_single_image" :to="{name: 'SingleArtwork', params: {id: id}}">
    <img  v-bind:src="image" width="300"/>
    <ButtonDeleteFav />
</router-link>                   

</template>

<script>
import ButtonDeleteFav from '@/components/UserProfile/ButtonDeleteFav.vue'

export default {
    name: "GalleryLayoutArtworks",
    components: { 
        ButtonDeleteFav
    },
    props: {
        image: String,
        id: Number
    }
}
</script>

<style scoped>

    img:hover {
    transform: scale(1.2); 
    transition: 0.8s; 
    }   
        
@media (max-width: 768px) {
    .gallery_single_artwork{
    margin: 2rem;
    }

}
</style>