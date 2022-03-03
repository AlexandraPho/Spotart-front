<template>
  <section class="artists-zoom">
        <h2>Zoom sur nos Artistes</h2>
        <hr>
        <section class="artists">
            <article class="first-artist">
                <h3>Chapeau</h3>
            </article>
            <article class="second-artist">
                <h3>Tatouage</h3>
            </article>
            <article class="third-artist">
                <h3>Pinceau</h3>
            </article>
            <article class="fourth-artist">
                <h3>Bandana</h3>
            </article>
        </section>
    </section>
</template>

<script>
    import ArtistsServices from '@/services/ArtistsServices.js';

    export default {
        name: 'HomeArtistListLayout',

        mounted() {
        // Attention, on ne traite pas pour l'instant les cas d'erreurs
        ArtistsServices.findAll().then(
            // Executer le code qui permet de recuperer le résultat de ma requete
            // Permet de garder le contexte et de recuperer response
            (response) => {
                console.log(response.data);
                this.recipes = response.data;
            }
        );
    },

    }
</script>

<style scoped>

    h2 {
        text-align: center;
        margin-bottom: 5px;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 8%;
    }
    .artists-zoom {
        padding: 0 120px 0 120px;
    }
    .artists-zoom .artists {
        margin: 20px 0 30px 0;
        display: grid;
        grid-template-columns: [start] 1fr [first-column] 1fr [second-column] 1fr [third-column] 1fr [end];
        grid-template-rows: 1fr;
    }
    .artists-zoom .artists .first-artist {
        /*background-image: url("../images/artist-1.jpg");*/
        background-color: blue;
        background-repeat: no-repeat;
        background-size: 100% 75%;
        background-position: center;
        height: 400px;
        width: 400px;
        max-width: 100vw;
    }
    .artists-zoom .artists .second-artist {
        /*background-image: url("../images/artist-2.jpg");*/
        background-color: blueviolet;
        background-repeat: no-repeat;
        background-size: 100% 75%;
        background-position: center;
        height: 400px;
        width: 400px;
        max-width: 100vw;
    }
    .artists-zoom .artists .third-artist {
        /* background-image: url("../images/artist-3.jpg"); */
        background-color: pink;
        background-repeat: no-repeat;
        background-size: 100% 75%;
        background-position: center;
        height: 400px;
        width: 400px;
        max-width: 100vw;
    }
    .artists-zoom .artists .fourth-artist {
        /* background-image: url("../images/artist-4.jpg"); */
        background-repeat: no-repeat;
        background-color: yellowgreen;
        background-size: 100% 75%;
        background-position: center;
        height: 400px;
        width: 400px;
        max-width: 100vw;
    }
    .artists-zoom .artists h3 {
        text-align: center;
        font-size: x-large;
    }
    
</style>