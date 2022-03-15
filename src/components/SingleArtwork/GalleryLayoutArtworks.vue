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
    .gallery
    {
        display:flex;
        flex-direction: row;    
    }
</style>