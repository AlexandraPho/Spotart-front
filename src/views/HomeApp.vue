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

/* .news-img
{
    height: 40vh;
}

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