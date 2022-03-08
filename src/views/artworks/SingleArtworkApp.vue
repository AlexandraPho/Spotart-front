<template>
    <main class="main-container">
        <HeaderLayout />
        <ArtworkDetailLayout v-if="artwork" v-bind:category="artwork._embedded['wp:term'][0][0].name" v-bind:author="artwork._embedded['author'][0].name" v-bind:image="artwork._embedded['wp:featuredmedia'][0].source_url" v-bind:title="artwork.title.rendered" v-bind:content="artwork.content.rendered" v-bind:date="artwork.date" v-bind:key="artwork.title" />
        <FooterLayout />
    </main>
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    import ArtworkDetailLayout from '@/components/artworks/ArtworkDetailLayout.vue'
    import ArtworksService from '@/services/ArtworksService.js';

    export default {
        name: 'SingleArtworkApp',
        components: {
            HeaderLayout,
            FooterLayout,
            ArtworkDetailLayout
        },
        data() {
            return {
                artwork:null
            }
        },
        mounted() {
            console.log(this.$route.params.id); 
            ArtworksService.find(this.$route.params.id).then(
                (response) => {
                    console.log(response.data);
                    this.artwork = response.data;
                }
            );
        }
    }
</script>

<style src="@/assets/css/artwork.css">
</style>