<template>
    <div>
        <HeaderLayout/>
        
        <ArtFormTitleLayout v-if="artform" :name="artform.name + 's'" />

        <ArtworksListLayout 
        v-bind:id="artwork.id"
        v-bind:image="artwork._embedded['wp:featuredmedia'][0] ? artwork._embedded['wp:featuredmedia'][0].source_url : ''" 
        v-bind:title="artwork.title.rendered" 
        v-bind:author="artwork._embedded['author'][0].name" 
        v-for="artwork in artworks" v-bind:key="artwork.title"/>

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

<style>
/*------ArtworksListLayout-------*/
    .artist-artwork {
        display: inline-flex;
        justify-content: space-around;
        margin: 1.5em 3em 0.2em 9em;
    }
    .artist-artwork .photos-titles{
       margin: 1em;
       
    }
    .artist-artwork .artwork-author {
        font-style: italic;
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
    
    .artist-artwork img {
        width: 15em;
        margin: 2em 4em;
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
    }
    .artist-artwork img:hover{
        width:20em;
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }

    .artist-artwork .artwork-title {
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
</style>