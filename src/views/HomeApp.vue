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

/* -------------NEWS------------- */

<<<<<<< HEAD
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
=======
/* .news-img
{
    height: 40vh;
}
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453

.news-img
{
    object-fit: cover;
    width: 100%;
    // background: linear-gradient(to right, transparent 0%, black 100%);
} */

/* -------------ARTISTS------------- */

.artists-zoom
{
    padding: 0 100px 0 100px;
}

<<<<<<< HEAD
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
=======
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
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453

.artists h3
{
    margin-top: 5px;
    text-align: center;
    font-size: x-large;
}

/* -------------EVENTS------------- */

.events-carousel
{
    display: flex;
    justify-content: center;
}

.events-img
{
    height: 50vh;
    width: 100vh;
    border-radius: 10px;
    filter: drop-shadow(0 0 0.50rem black);
}

</style>