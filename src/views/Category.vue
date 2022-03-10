<template>
    <div>
        <HeaderLayout />

        <CategoryTitleFilterLayout v-if="urlId == categoriesName[this.$route.params.id].id" :name="categoriesName[this.$route.params.id].name"/>
        <CategoryArtworks v-bind:id="artwork.id" v-bind:image="artwork._embedded['wp:featuredmedia'][0] ? artwork._embedded['wp:featuredmedia'][0].source_url : ''" v-bind:title="artwork.title.rendered" v-bind:author="artwork._embedded['author'][0].name" v-for="artwork in artworks" v-bind:key="artwork.title"/>
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

    import ArtworksService from '@/services/ArtworksService.js';
    import CategoriesService from '@/services/CategoriesService.js';

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
                categories : null,
                categoriesName: [
                    {
                        id: 5,
                        name: "Dessins"
                    },
                    {
                        id: 1,
                        name: "Peintures"
                    },
                    {
                        id: 6,
                        name: "Photographies"
                    },
                    {
                        id: 3,
                        name: "Sculptures"
                    }
                ],
                urlId: this.$route.params.id,
            }
        },
        mounted() {
            console.log(this.$route.params.id);
            ArtworksService.findByCategory(this.$route.params.id).then(
             
                (response)=> {
                   console.log(response.data.slice(0, 8));
                   //console.log(response.data[0]._embedded['wp:term']);
                   console.log(this.$route.params.id);
                   
                this.artworks = response.data;
                }
            );

            console.log(this.$route.params.id);
            CategoriesService.findAll(this.$route.params.id).then(
             
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