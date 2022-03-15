<template>
    <div class="artist-detail-container">
        <h1 class="title">{{ title }}</h1>
        <p class="border-artist"></p>
        <p class="text" v-html="content"></p>
        <div class="media-details" v-bind:style="'background-image:url(' + image + ')'">    
        </div>
        <section class="artist">
        </section>
    </div>
</template>

<script>

    export default {
        name: 'ArtistDetailLayout',
        props: {
            title: String,
            content: String,
            image: String,
            id: Number
        }
    }
</script>