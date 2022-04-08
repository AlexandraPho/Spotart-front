<template>
    <div>
        <!--<HeaderMenu />-->
        <HeaderCopy />
        <!--<HeaderLayout />-->
        <ArtworksListHomeLayout />
        <ArtistsListHomeLayout />
        <EventsListLayout />        
        <FooterLayout />
    </div>
</template>

<script>
    //import HeaderMenu from '@/components/template/HeaderMenu.vue';
    import HeaderCopy from '@/components/template/HeaderCopy.vue';
    //import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import ArtworksListHomeLayout from '@/components/home/ArtworksListHomeLayout.vue';
    import ArtistsListHomeLayout from '@/components/home/ArtistsListHomeLayout.vue';
    import EventsListLayout from '@/components/home/EventsListLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';

    export default {
        name: 'HomeApp',
        components: {
            //HeaderMenu,
            HeaderCopy,
            //HeaderLayout,
            FooterLayout,
            ArtworksListHomeLayout,
            ArtistsListHomeLayout,
            EventsListLayout
        }
    }
</script>