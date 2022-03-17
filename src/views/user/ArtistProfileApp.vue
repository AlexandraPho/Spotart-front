<template>
  <div>
    <HeaderLayout />
    <ArtistDetailLayout v-if="artist" v-bind:title="artist.title.rendered" v-bind:content="artist.content.rendered" v-bind:imgSrc="artist._embedded ? artist._embedded['wp:featuredmedia'][0].source_url : 'http://spotart.local/app/uploads/2022/02/exo5.png'" :imgAlt="artist._embedded['wp:featuredmedia'][0].alt_text" />
    <FooterLayout />
  </div>
</template>

<script>
    import ArtistDetailLayout from "@/components/user/ArtistDetailLayout.vue"; 
    import ArtistsService from "@/services/ArtistsService.js";
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';

    export default {
        name: "ArtistProfileApp",
        data() {
            return {
                artist: null,
            };
        },
        mounted() {
            console.log(this.$route.params.id);
            ArtistsService.find(this.$route.params.id).then(
                (response) => {
                    console.log(response.data);
                    this.artist = response.data;
                }
            );
        },
        components: {
            ArtistDetailLayout,
            HeaderLayout,
            FooterLayout,
        },
    };
</script>