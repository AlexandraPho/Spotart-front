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