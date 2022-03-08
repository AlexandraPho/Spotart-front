<template>
    <div>
        <HeaderLayout/>

        <ArtFormTitleLayout v-if="urlId == artFormsName[this.$route.params.id].id" :name="artFormsName[this.$route.params.id].name"/>
        <ArtworksListLayout v-bind:id="artwork.id" v-bind:image="artwork._embedded['wp:featuredmedia'][0] ? artwork._embedded['wp:featuredmedia'][0].source_url : ''" v-bind:title="artwork.title.rendered" v-bind:author="artwork._embedded['author'][0].name" v-for="artwork in artworks" v-bind:key="artwork.title"/>

        <FooterLayout/>
    </div>
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';
    import ArtFormTitleLayout from '@/components/artforms/ArtFormTitleLayout.vue';
    import ArtworksListLayout from '@/components/artworks/ArtworksListLayout.vue';

    import ArtworksService from '@/services/ArtworksService.js';
    import ArtFormsService from '@/services/ArtFormsService.js';

    export default {
        name: 'ArtFormsApp',
        components: {
            HeaderLayout,
            ArtFormTitleLayout,
            ArtworksListLayout,
            FooterLayout
        },
        data() {
            return {
                artworks: null,
                categories : null,
                artFormsName: [
                    {
                        id: 7,
                        name: "Dessins"
                    },
                    {
                        id: 8,
                        name: "Peintures"
                    },
                    {
                        id: 9,
                        name: "Photographies"
                    },
                    {
                        id: 10,
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
                   console.log(response.data);
                   console.log(response.data[0]._embedded['wp:term']);
                   console.log(this.$route.params.id);

                   this.artworks = response.data;
                }
            );
            console.log(this.$route.params.id);
            ArtFormsService.findAll(this.$route.params.id).then(
                (response)=> {
                    console.log(response.data);
                    this.categories = response.data;
                }
            );    
        }
    }
</script>