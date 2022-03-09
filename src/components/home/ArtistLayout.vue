<template>
    <article>
        <router-link :to="{name: 'ArtistProfile', params: { id: id }}">
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
        /* methods:{
            goToSingleArtist(id){
                this.$router.push('/artists/' + id);
            }
        } */
    }
</script>