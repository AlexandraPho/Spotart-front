<template>
    <div>
        <HeaderLayout />
        <NewsListLayout />
        <ArtworksListHomeLayout />
        <ArtistsListHomeLayout />
        <EventsListLayout />        
        <FooterLayout />
    </div>
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import NewsListLayout from '@/components/home/NewsListLayout.vue';
    import ArtworksListHomeLayout from '@/components/home/ArtworksListHomeLayout.vue';
    import ArtistsListHomeLayout from '@/components/home/ArtistsListHomeLayout.vue';
    import EventsListLayout from '@/components/home/EventsListLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';

    export default {
        name: 'HomeApp',
        components: {
            HeaderLayout,
            FooterLayout,
            NewsListLayout,
            ArtworksListHomeLayout,
            ArtistsListHomeLayout,
            EventsListLayout
        }
    }
</script>

<style>

    /* -------------GENERAL------------- */

    img {
        width: 15em;
        margin: 2em 4em;
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
    }
    
    img:hover{
        width:20em;
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    h2 {
        display: flex;
        justify-content: center;
        font-size: 2em;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 30em;
    }

    /* -------------CAROUSEL------------- */

    .carousel {
        width: 100vw;
        max-width: 100%;
        background-color: cadetblue;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 500px;
        box-shadow: 0px 2px #000000;
    }
    .carousel .arrows {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .carousel i {
        font-size: xxx-large;
        color: #ffde59;
        padding: 0 40px 0 40px;
        cursor: pointer;
        text-shadow: 2px 2px #000000;
    }

    /* -------------ARTWORKS------------- */

    .latest-artworks {
        padding: 0 120px 0 120px;
    }
    .latest-artworks .artworks-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .latest-artworks .artwork-info h3 {
        text-align: center;
        font-size: x-large;
    }
    .latest-artworks .artwork-info p {
        text-align:center;
    }

    /* -------------ARTISTS------------- */

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
        background-color: blue;
        background-repeat: no-repeat;
        background-size: 100% 75%;
        background-position: center;
        height: 400px;
        width: 400px;
        max-width: 100vw;
    }
    .artists-zoom .artists .second-artist {
        background-color: blueviolet;
        background-repeat: no-repeat;
        background-size: 100% 75%;
        background-position: center;
        height: 400px;
        width: 400px;
        max-width: 100vw;
    }
    .artists-zoom .artists .third-artist {
        background-color: pink;
        background-repeat: no-repeat;
        background-size: 100% 75%;
        background-position: center;
        height: 400px;
        width: 400px;
        max-width: 100vw;
    }
    .artists-zoom .artists .fourth-artist {
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
    
    /* -------------EVENTS------------- */

    .next-events {
        padding: 0 120px 10px 120px;
    }
    .next-events .background {
        display: flex;
        margin-top: 20px;
        height: 400px;
        background-repeat: no-repeat;
        background-size: 100% 400px;
    }
    .next-events .background .arrows-events {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 0 40px 0 40px;
        color: #ffde59;
        font-size: xxx-large;
    }
</style>