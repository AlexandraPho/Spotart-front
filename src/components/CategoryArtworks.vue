<template>
    <div class="artist-artwork">
        <div class="photos-titles">
            <img v-bind:src="image" v-bind:alt="title" @click='goToSingleArtwork()' >
            <p class="artwork-title">{{title}}</p>
            <p class="artwork-author">{{author}}</p>
        </div>
    </div> 
</template>

<script>
    export default {
        name: 'CategoryArtworks',
        props: {
            title: String,
            image: String,
            author: String,
            id: Number
        },
        data() {
            return {
                artworks: []
            }
        },
        methods:{
            goToSingleArtwork(){
                this.$router.push('/artwork/:id'); 
            }
        }
    }
    
</script>

<style scoped>
    /*ARTWORKS section*/
    .artist-artwork {
        display: inline-flex;
        justify-content: space-around;
        margin: 1.5em 2em 0.2em 2em;
    }
    .artist-artwork .photos-titles{
       margin: 1em;
    }
    .artist-artwork .artwork-author {
        font-style: italic;
        margin-left: 8em;
    }
    .artist-artwork img {
        /*margin: 0.2em;*/
        width: 12em;
        height: 12em;
    }
    .artist-artwork .artwork-title {
        justify-content: flex-end;
        display: flex;
        margin: 0em 0.6em 0em 0em;
    }
</style>