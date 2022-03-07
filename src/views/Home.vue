<template>
    <div>
        <HeaderLayout />

        <HomeNewsCarouselLayout />
        <HomeArtworkListLayout />
        <HomeArtistListLayout />
        <HomeEventListLayout />
        
        <FooterLayout />
    </div>
</template>

<script>
    import HeaderLayout from '@/components/HeaderLayout.vue';
    import FooterLayout from '@/components/FooterLayout.vue';
    import HomeNewsCarouselLayout from '@/components/HomeNewsCarouselLayout.vue';
    import HomeArtworkListLayout from '@/components/HomeArtworkListLayout.vue';
    import HomeArtistListLayout from '@/components/HomeArtistListLayout.vue';
    import HomeEventListLayout from '@/components/HomeEventListLayout.vue';

    export default {
        name: 'HomeApp',
        components: {
            HeaderLayout,
            FooterLayout,
            HomeNewsCarouselLayout,
            HomeArtworkListLayout,
            HomeArtistListLayout,
            HomeEventListLayout
        }
    }
</script>