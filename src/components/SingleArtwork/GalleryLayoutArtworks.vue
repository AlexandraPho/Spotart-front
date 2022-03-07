<template>

<router-link class="gallery_single_image" :to="{name: 'SingleArtwork', params: {id: id}}">
    <img  v-bind:src="image" v-bind:alt="title" width="300"/>
</router-link>                   

</template>

<script>
export default {
    name: "GalleryLayoutArtworks",
    
    props: {
        title: String,
        image: String,
        id: Number
    }
}
</script>

<style scoped>
.gallery{
display:flex;
flex-direction: row;    
}
</style>