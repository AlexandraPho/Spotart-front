<template>
    <section class="latest-artworks">
        <h2>Les dernières Oeuvres</h2>
        <hr>
        <div class="artworks">
            <ArtworkLayout v-for="artwork in artworks" :key="artwork.title" :id="artwork.id" :imgSrc="artwork._embedded['wp:featuredmedia'][0].source_url" :imgAlt="artwork._embedded['wp:featuredmedia'][0].alt_text" :title="artwork.title.rendered" />
        </div>
    </section>
</template>

<script>
    import ArtworksService from '@/services/ArtworksService.js';
    import ArtworkLayout from '@/components/home/ArtworkLayout.vue';

    export default {
        name: 'ArtworksListHomeLayout',
        components: {
            ArtworkLayout
        },
        data() {
            return {
                artworks: null
            }
        },
        mounted() {
            ArtworksService.findAll().then(
                (response) => {
                    console.log('Artworks', response.data);
                    this.artworks = response.data.slice(0, 4);
                }
            );
        },
    }
</script>

<style>

    @media (min-width: 320px) and (max-width: 768px) {

        .artworks {
            display: flex;
            /* justify-content: center; */
            /* gap: 6.5vw; */
            /* flex-direction: row; */
            flex-wrap: wrap;
            margin: 1rem;
            text-align: center;
        }

        article {
            height: 50%;
            margin-bottom: 1.5rem
        }

        .latest-artworks img {
            width: 60%;
            height: 15%;
            margin: 1.5rem;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            /*transition: all 0.3s;*/
        }

        .latest-artworks img:hover {
            /*width: 23em;
            height: 23em;*/
            /*border : 2px solid #000000;*/
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            /*transform: scale(1.2);*/
            cursor: pointer;
        }

        .artworks h3 {
            margin-top: 5px;
            text-align: center;
            /*font-size: large;*/
        } 
    }

    @media (min-width: 768px) and (max-width: 1200px) {

        .artworks {
            display: flex;
            justify-content: center;
            gap: 6.5vw;
            /* flex-direction: row; */
            flex-wrap: wrap;
        }
        .article {
            height: 10%;
        }
        .latest-artworks img
        {
            width: 38vw;
            height: 75%;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            /*transition: all 0.3s;*/
        }

        .latest-artworks img:hover {

           /* width: 25em;
            height: 25em;*/
            /*border : 2px solid #000000;*/
            box-shadow: 8px 8px 10px 0 rgba(0,0,0,0.5);
            /*transform:scale(1.2);*/
            cursor: pointer;
        }

        .artworks h3 {
            margin-top: 5px;
            text-align: center;
            font-size: x-large;
        }
    }

    @media (min-width: 1200px) {

        .artworks {
            display: flex;
            justify-content: center;
            gap: 6.5vw;
        }

        .latest-artworks img {
            width: 15vw;
            height: 60%;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            /*transition: all 0.3s;*/
        }

        .latest-artworks img:hover {
            /*width: 15em;
            height: 15em;*/
            /*border : 2px solid #000000;*/
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            /*transform:scale(1.3);*/
            cursor: pointer;
        }

        .artworks h3 {
            margin-top: 5px;
            text-align: center;
            font-size: x-large;
        }
    }

    /*@media (min-width: 1600px) {

        .artworks {
            display: flex;
            justify-content: center;
            gap: 4vw;
        }

        article {
            height: 25vw;
        }

        .latest-artworks img {
            width: 17vw;
            height: 65%;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            transition: all 0.3s;
        }

        .latest-artworks img:hover {
            width: 19em;
            height: 17.5em;
            border : 2px solid #000000;
            box-shadow: 8px 8px 10px 0 rgba(0,0,0,0.5);
            transform: scale(1.3);
            cursor: pointer;
        }

        .artworks h3 {
            margin-top: 5px;
            text-align: center;
            font-size: x-large;
        }
    }*/

</style>