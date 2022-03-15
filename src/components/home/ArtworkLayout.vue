<template>
    <article class="artwork-info">
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