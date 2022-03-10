<template>
    <div>
        <HeaderLayout />

        <HomeNewsCarouselLayout />
        <HomeArtworkListLayout v-bind:id="artwork.id" v-bind:image="artwork._embedded['wp:featuredmedia'][0] ? artwork._embedded['wp:featuredmedia'][0].source_url : ''" v-bind:title="artwork.title.rendered" v-bind:author="artwork._embedded['author'][0].name" v-for="artwork in artworks" v-bind:key="artwork.title"/>
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

    import ArtworksService from '@/services/ArtworksService.js';

    export default {
        name: 'HomeApp',
        components: {
            HeaderLayout,
            FooterLayout,
            HomeNewsCarouselLayout,
            HomeArtworkListLayout,
            HomeArtistListLayout,
            HomeEventListLayout
        },
        data() {
            return {
                artworks: null,
            }
        },
        mounted() {
            // Attention, on ne traite pas pour l'instant les cas d'erreurs
            ArtworksService.findAll().then(
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