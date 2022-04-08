<template>
    <article class="article-artist">
        <router-link :to="{name: 'ArtistProfile', params: { id: id }}">
            <img :src="imgSrc" :alt="imgAlt">
        </router-link>
        <h3 v-html="title"></h3>
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
        /* methods:{
            goToSingleArtist(id){
                this.$router.push('/artists/' + id);
            }
        } */
    }
</script>