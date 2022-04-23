<template>
    <section class="artists-zoom">
        <h2>Zoom sur nos Artistes</h2>
        <hr>
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
                    this.artists = response.data.slice(0, 5); //todo Change to 4 after presentation
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
            align-items: flex-end;
            justify-content: center;
            margin: 1rem;
            gap: 2rem;
            flex-wrap: wrap;
            /* justify-content: center; */
            /* flex-direction: row; */
            /* text-align: center;*/
        }

        .article-artist 
        {
            width: 40%;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .artists img 
        {
            width: 8rem;
            border-radius: 0.2rem;
            filter: drop-shadow(0 0 0.2rem black);
            /* transition: all 0.3s;
            /* height: 15%; */
            /* margin: 0.5rem; */
        }

        .artists img:hover 
        {
            cursor: pointer;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            /*width: 23em;
            height: 23em;*/
            /*border : 2px solid #000000;*/
            /*transform: scale(1.2);*/
        }

        .artists h3 
        {
            margin-top: 0.2rem;
            text-align: center;
            /*font-size: large;*/
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {

        .artists 
        {
            display: flex;
            justify-content: center;
            gap: 6rem;
            flex-wrap: wrap;
            align-items: flex-end;
            /* flex-direction: row; */
        }

        article 
        {
            width: 30%;
            margin-bottom: 1rem;
            text-align: center;
        }

        .artists img 
        {
            width: 14rem;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            /* transition: all 0.3s;
            /* height: 75%; */
        }

        .artists img:hover 
        {
            box-shadow: 8px 8px 10px 0 rgba(0,0,0,0.5);
            cursor: pointer;
           /* width: 25em;
            height: 25em;*/
            /*border : 2px solid #000000;*/
            /*transform:scale(1.2);*/
        }

        .artists h3 
        {
            margin-top: 0.2rem;
            text-align: center;
            font-size: 1.5rem;
        }
    }

    @media (min-width: 1200px) {

        .artists 
        {
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }

        article 
        {
            width: 30%;
            margin-bottom: 1rem;
            text-align: center;
        }

        .artists img 
        {
            width: 80%;
            border-radius: 1rem;
            filter: drop-shadow(0 0 0.50rem black);
        }

        .artists img:hover 
        {
            cursor: pointer;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            /*width: 15em;
            height: 15em;*/
            /*border : 2px solid #000000;*/
            /*transform:scale(1.3);*/
        }

        .artists h3 
        {
            margin-top: 0.2rem;
            text-align: center;
            font-size: x-large;
        }
    }
</style>