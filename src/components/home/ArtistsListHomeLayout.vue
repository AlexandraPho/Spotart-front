<template>
    <section class="artists-zoom">
        <h2>Zoom sur nos Artistes</h2>
        <hr><br><br>
        <div class="artists">
            <ArtistLayout v-for="artist in artists" :key="artist.title" :id="artist.id" :imgSrc="artist._embedded['wp:featuredmedia'][0].source_url" :imgAlt="artist._embedded['wp:featuredmedia'][0].alt_text" :title="artist.title.rendered" />
        </div>
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

<style>

    @media (min-width: 320px) and (max-width: 768px) {

        .artists
        {
            display: flex;
            justify-content: center;
            gap: 6.5vw;
            flex-direction: row;
            flex-wrap: wrap;
        }

        article
        {
            height: 70vw;
        }

        .artists img
        {
            width: 65vw;
            height: 75%;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            transition: all 0.3s;
        }

        .artists img:hover
        {
            width: 23em;
            height: 23em;
            border : 2px solid #000000;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            transform: scale(1.2);
            cursor: pointer;
        }

        .artists h3
        {
            margin-top: 5px;
            text-align: center;
            font-size: x-large;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {

        .artists
        {
            display: flex;
            justify-content: center;
            gap: 6.5vw;
            flex-direction: row;
            flex-wrap: wrap;
        }

        article
        {
            height: 60vw;
        }

        .artists img
        {
            width: 38vw;
            height: 75%;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            transition: all 0.3s;
        }

        .artists img:hover
        {
            width: 25em;
            height: 25em;
            border : 2px solid #000000;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            transform: scale(1.2);
            cursor: pointer;
        }

        .artists h3
        {
            margin-top: 5px;
            text-align: center;
            font-size: x-large;
        }
    }

    @media (min-width: 1200px) and (max-width: 1600px) {

        .artists
        {
            display: flex;
            justify-content: center;
            gap: 6.5vw;
        }

        article
        {
            height: 25vw;
        }

        .artists img
        {
            width: 18vw;
            height: 75%;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            transition: all 0.3s;
        }

        .artists img:hover
        {
            width: 15em;
            height: 15em;
            border : 2px solid #000000;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            transform:scale(1.3);
            cursor: pointer;
        }

        .artists h3
        {
            margin-top: 5px;
            text-align: center;
            font-size: x-large;
        }
    }

    @media (min-width: 1600px) {

        .artists
        {
            display: flex;
            justify-content: center;
            gap: 4vw;
        }

        article
        {
            height: 25vw;
        }

        .artists img
        {
            width: 19vw;
            height: 75%;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            transition: all 0.3s;
        }

        .artists img:hover
        {
            width: 17em;
            height: 17em;
            border : 2px solid #000000;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            transform:scale(1.3);
            cursor: pointer;
        }

        .artists h3
        {
            margin-top: 5px;
            text-align: center;
            font-size: x-large;
        }
    }

</style>