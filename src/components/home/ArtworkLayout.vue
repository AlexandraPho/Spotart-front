<template>
    <article class="article">
        <router-link :to="{name: 'SingleArtwork', params: { id: id }}">
            <img :src="imgSrc" :alt="imgAlt">
        </router-link>
        <h3 v-html="title"></h3>
    </article>
</template>

<script>
    export default {
        name: 'ArtworkLayout',
        props: {
            imgSrc: String,
            imgAlt: String,
            title: String,
            id: Number
        },        
    }
</script>

<style scoped>
    @media (min-width: 320px) and (max-width: 768px) {
        
    }

    @media (min-width: 768px) and (max-width: 1200px) {

    }

    @media (min-width: 1200px) and (max-width: 1600px) {

    }

    @media (min-width: 1600px) {

    }
</style>