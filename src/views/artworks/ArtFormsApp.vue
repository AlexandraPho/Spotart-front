<template>
    <div>
        <HeaderLayout/>
        
        <ArtFormTitleLayout v-if="urlId == artformlinks[this.$route.params.id].id" :name="artformlinks[this.$route.params.id].name + 's'" />
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
                artforms : null,
                urlId: this.$route.params.id,
                artformlinks: [
                    {

                    },
                    {

                    },
                    {
                        name: "Sculpture",
                        url: "/art-form/2",
                        id: 2
                    },
                    {
                        name: "Peinture",
                        url: "/art-form/3",
                        id: 3
                    },
                    {
                        name: "Dessin",
                        url: "/art-form/4",
                        id: 4
                    },
                    {
                        name: "Photographie",
                        url: "/art-form/5",
                        id: 5
                    },
                ]
            }
        },
        mounted() {
            console.log(this.$route.params.id);
            ArtworksService.findByCategory(this.$route.params.id).then(
                (response)=> {
                   console.log('Artworks', response.data);
                   this.artworks = response.data;
                }
            );
            console.log(this.$route.params.id);
            ArtFormsService.findAll(this.$route.params.id).then(
                (response)=> {
                    console.log('ArtForms', response.data);
                    this.artforms = response.data;
                }
            );    
        }
    }
</script>