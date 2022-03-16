<template>
    <div class="artist-artwork">
        <div class="photos-titles">
            <router-link :to="{ name: 'SingleArtwork', params: { id: id }}">
                <img v-bind:src="image" v-bind:alt="title">
            </router-link>
                <p class="artwork-title" v-html="title"></p>
                <p class="artwork-author">{{ author }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArtworksListLayout',
        props: {
            title: String,
            image: String,
            author: String,
            id: Number
        },
    }
    
</script>

<style scoped>

    .artist-artwork {
        display: inline-flex;
        justify-content: space-around;
        margin: 1.5em 3em 0.2em 5em;
    }
    .artist-artwork .photos-titles{
       margin: 1em;
       
    }
    .artist-artwork .artwork-author {
        font-style: italic;
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
    
    .artist-artwork img {
        /*margin: 0.2em;*/
        width: 12em;
        height: 12em;
        /*border-radius: 1em;*/
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    .artist-artwork img:hover{
        width:15em;
        height:15em;
        border : 2px solid #000000;
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
        transform:scale(1.2);
        cursor: pointer;
    }

    .artist-artwork .artwork-title {
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
</style>