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