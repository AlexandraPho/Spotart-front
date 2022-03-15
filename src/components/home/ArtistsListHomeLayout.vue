<template>
    <section class="artists-zoom">
<<<<<<< HEAD
        <h2 class="title-section">Zoom sur nos Artistes</h2>
        <hr>
        <ArtistLayout 
        v-for="artist in artists" 
        :key="artist.title" 
        :id="artist.id" 
        :imgSrc="artist._embedded['wp:featuredmedia'][0].source_url" 
        :imgAlt="artist._embedded['wp:featuredmedia'][0].alt_text" 
        :title="artist.title.rendered" />
=======
        <h2>Zoom sur nos Artistes</h2>
        <hr><br>
        <div class="artists">
            <ArtistLayout v-for="artist in artists" :key="artist.title" :id="artist.id" :imgSrc="artist._embedded['wp:featuredmedia'][0].source_url" :imgAlt="artist._embedded['wp:featuredmedia'][0].alt_text" :title="artist.title.rendered" />
        </div>
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
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
                    console.log('Artists', response.data);
                    this.artists = response.data.slice(0, 4);
                }
            );
        },
    }
</script>

<<<<<<< HEAD
<style scoped>
    
=======
<style>

    .artists-zoom
    {
        padding: 0 100px 0 100px;
    }

    .artists
    {
        display: flex;
        justify-content: center;
        gap: 7vw;
        height: 30vh;
    }

    .artists img
    {
        width: 12vw;
        height: 75%;
        border-radius: 10px;
        filter: drop-shadow(0 0 0.50rem black);
    }

    .artists h3
    {
        margin-top: 5px;
        text-align: center;
        font-size: x-large;
    }

>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
</style>