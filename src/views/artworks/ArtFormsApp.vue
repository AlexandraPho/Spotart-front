<template>
    <div>
        <HeaderCopy/>
        
        <ArtFormTitleLayout v-if="artform" :name="artform.name + 's'" />

        <ArtworksListLayout v-bind:id="artwork.id" v-bind:image="artwork._embedded['wp:featuredmedia'][0] ? artwork._embedded['wp:featuredmedia'][0].source_url : ''" v-bind:title="artwork.title.rendered" v-bind:author="artwork._embedded['author'][0].name" v-for="artwork in artworks" v-bind:key="artwork.title"/>

        <FooterLayout/>
    </div>
</template>

<script>
    import HeaderCopy from '@/components/template/HeaderCopy.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';
    import ArtFormTitleLayout from '@/components/artforms/ArtFormTitleLayout.vue';
    import ArtworksListLayout from '@/components/artworks/ArtworksListLayout.vue';

    import ArtworksService from '@/services/ArtworksService.js';
    import ArtFormsService from '@/services/ArtFormsService.js';

    export default {
        name: 'ArtFormsApp',
        components: {
            HeaderCopy,
            ArtFormTitleLayout,
            ArtworksListLayout,
            FooterLayout
        },
        data() {
            return {
                artworks: null,
                artform : null,
            }
        },
        mounted() {
            ArtworksService.findByCategory(this.$route.params.id).then(
                (response)=> {
                   console.log('Artworks', response.data);
                   this.artworks = response.data;
                }
            );
            ArtFormsService.find(this.$route.params.id).then(
                (response)=> {
                    console.log('Artforms-ArtFormsApp', response.data);
                    this.artform = response.data;
                }
            );    
        },
        beforeRouteUpdate(to) {
            console.log(to.params.id);
            ArtworksService.findByCategory(to.params.id).then(
                (response)=> {
                   console.log('Artworks-beforeRouteUpdate', response.data);
                   this.artworks = response.data;
                }
            );
            ArtFormsService.find(to.params.id).then(
                (response)=> {
                    console.log('ArtForm-beforeRouteUpdate', response.data);
                    this.artform = response.data;
                }
            );  
        }
    }
</script>