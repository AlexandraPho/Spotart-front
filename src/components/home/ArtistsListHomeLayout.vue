<template>
    <section class="artists-zoom">
        <h2>Zoom sur nos Artistes</h2>
        <hr>
        <ArtistLayout v-for="artist in artists" :key="artist.title" :id="artist.id" :imgSrc="artist._embedded['wp:featuredmedia'][0].source_url" :imgAlt="artist._embedded['wp:featuredmedia'][0].alt_text" :title="artist.title.rendered" />
    </section>
</template>

<script>
    import ArtistsService from '@/services/ArtistsService.js';
    import ArtistLayout from '@/components/home/ArtistLayout.vue';

    export default {
        name: 'ArtistsListHomeLayout',
        components: {
            ArtistLayout
        },
        data() {
            return {
                artists: null
            }
        },
        mounted() {
            ArtistsService.findAll().then(
                (response) => {
                    console.log('Artists', response.data.slice(0, 4));
                    this.artists = response.data;
                }
            );
        },
    }
</script>