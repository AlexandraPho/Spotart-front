<template>
    <section class="latest-artworks">
        <h2>Les dernières Oeuvres</h2>
        <hr>
        <section class="artworks">
            <article class="first-artwork"></article>
            <article class="second-artwork"></article>
            <article class="third-artwork"></article>
            <article class="fourth-artwork"></article>
        </section>
    </section>
</template>

<script>
    import ArtworksServices from '@/services/ArtworksServices.js';

    export default {
        name: 'HomeArtworkListLayout',
        mounted() {
            // Attention, on ne traite pas pour l'instant les cas d'erreurs
            ArtworksServices.findAll().then(
                // Executer le code qui permet de recuperer le résultat de ma requete
                // Permet de garder le contexte et de recuperer response
                (response) => {
                    console.log(response.data);
                    this.artworks = response.data;
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
    .latest-artworks {
        padding: 0 120px 0 120px;
    }
    .latest-artworks .artworks {
        margin: 20px 0 30px 0;
        display: grid;
        grid-template-columns: [start] 1fr [first-column] 1fr [second-column] 1fr [third-column] 1fr [end];
        grid-template-rows: 1fr;
        align-items: center;
    }
    .latest-artworks .artworks .first-artwork {
        /* background-image: url("../images/painting-artwork.jpg"); */
        background-color: aqua;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 400px;
        height: 400px;
    }
    .latest-artworks .artworks .second-artwork {
        /* background-image: url("../images/sculpture-artwork.jpg"); */
        background-color: #ffde59;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 400px;
        height: 400px;
    }
    .latest-artworks .artworks .third-artwork {
        /*background-image: url("../images/drawing-artwork.jpeg");*/
        background-color: darkred;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 400px;
        height: 400px;
    }
    .latest-artworks .artworks .fourth-artwork {
        /*background-image: url("../images/photo-artwork.jpg");*/
        background-color: brown;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 400px;
        height: 400px;
    }

</style>