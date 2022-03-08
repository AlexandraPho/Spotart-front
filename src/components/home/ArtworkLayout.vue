<template>
    <article>
        <router-link :to="{title: 'Artwork', params: {id: id}}">
            <img :src="imgSrc" :alt="imgAlt">
            <h3 :html="title"></h3>
        </router-link>
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