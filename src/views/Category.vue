<template>
    <div>
        <HeaderLayout/>

        <CategoryTitleFilterLayout />
        <CategoryArtworks v-bind:id="artwork.id" v-bind:image="artwork._embedded['wp:featuredmedia'][0] ? artwork._embedded['wp:featuredmedia'][0].source_url : ''" v-bind:title="artwork.title.rendered" v-for="artwork in artworks" v-bind:key="artwork.title"/>
        <CategorySwitchPage/>

        <FooterLayout/>
    </div>
</template>

<script>
    import HeaderLayout from '@/components/HeaderLayout.vue';
    import CategoryTitleFilterLayout from '@/components/CategoryTitleFilterLayout.vue';
    import CategoryArtworks from '@/components/CategoryArtworks.vue';
    import CategorySwitchPage from '@/components/CategorySwitchPage.vue';
    import FooterLayout from '@/components/FooterLayout.vue';

    import ArtworksServices from '@/services/ArtworksServices.js';
    import CategoriesServices from '@/services/CategoriesServices.js';

    export default {
        name: 'CategoryArtwork',
        components: {
            HeaderLayout,
            CategoryTitleFilterLayout,
            CategoryArtworks,
            CategorySwitchPage,
            FooterLayout
        },
        data() {
            return {
                artworks: null,
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