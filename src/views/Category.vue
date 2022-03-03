<template>
    <div>
        <HeaderLayout/>

        <CategoryTitleFilterLayout/>
        <CategoryArtworks v-bind:image="artwork._embedded ? artwork._embedded['wp:featuredmedia'][0].source_url : 'https://source.unsplash.com/collection/157&random=100'" v-bind:title="artwork.title.rendered" v-for="artwork in artworks" v-bind:key="artwork.title"/>
        <CategoryPortraitArtist v-bind:image="artist._embedded ? artist._embedded['wp:featuredmedia'][0].source_url : 'https://source.unsplash.com/collection/157&random=100'" v-bind:title="artist.title.rendered" v-for="artist in artists" v-bind:key="artist.title"/>
        <CategorySwitchPage/>

        <FooterLayout/>
    </div>
</template>

<script>
    import HeaderLayout from '@/components/HeaderLayout.vue';
    import CategoryTitleFilterLayout from '@/components/CategoryTitleFilterLayout.vue';
    import CategoryPortraitArtist from '@/components/CategoryPortraitArtist.vue';
    import CategoryArtworks from '@/components/CategoryArtworks.vue';
    import CategorySwitchPage from '@/components/CategorySwitchPage.vue';
    import FooterLayout from '@/components/FooterLayout.vue';

    import ArtworksServices from '@/services/ArtworksServices.js';
    import ArtistsServices from '@/services/ArtistsServices.js';
    import CategoriesServices from '@/services/CategoriesServices.js';

    export default {
        name: 'CategoryArtwork',
        components: {
            HeaderLayout,
            CategoryTitleFilterLayout,
            CategoryPortraitArtist,
            CategoryArtworks,
            CategorySwitchPage,
            FooterLayout
        },
        data() {
            return {
                artworks: null,
                artists:null
            }
        },

        mounted() {
            console.log(this.$route.params.id);
            ArtworksServices.findByCategory(this.$route.params.id).then(
             
                (response)=> {
                   console.log(response.data);
                this.artworks = response.data;
                }
            );

            console.log(this.$route.params.id);
            ArtistsServices.findAll(this.$route.params.id).then(
             
                (response)=> {
                   console.log(response.data);
                this.artists = response.data;
                }
            );

            console.log(this.$route.params.id);
            CategoriesServices.findAll(this.$route.params.id).then(
             
                (response)=> {
                   console.log(response.data);
                this.categories = response.data;
                }
            );
        }
    }
</script>

<style>

</style>