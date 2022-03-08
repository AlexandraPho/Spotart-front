<template>
    <article>
        <router-link :to="{title: 'Artist', params: {id: id}}">
            <img :src="imgSrc" :alt="imgAlt">
            <h3 :html="title"></h3>
        </router-link>
    </article>
</template>

<script>
    export default {
        name: 'ArtistLayout',
        props: {
            imgSrc: String,
            imgAlt: String,
            title: String,
            id: Number
        },
    }
</script>