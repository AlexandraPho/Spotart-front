<template>
    <div class="artist-artwork">
        <div class="photos-titles">
            <img v-bind:src="image" v-bind:alt="title">
            <p class="artwork-title">{{ title }}</p>
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
        border-radius: 1em;
    }
    .artist-artwork img:hover{
        width:15em;
        height:15em;
        cursor: pointer;
    }

    .artist-artwork .artwork-title {
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
</style>