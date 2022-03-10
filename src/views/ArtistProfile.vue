<template>
  <div>
    <header-layout/>
    <ArtistDetailLayout
      v-if="artist"
      v-bind:title="artist.title.rendered"
      v-bind:content="artist.content.rendered"
     v-bind:image="artist._embedded ? artist._embedded['wp:featuredmedia'][0].source_url : 'http://spotart.local/app/uploads/2022/02/exo5.png'"
    />
    <footer-layout/>
  </div>
</template>

<script>
import ArtistDetailLayout from "@/components/ArtistDetailLayout.vue";
import ArtistsService from "@/services/ArtistsService.js";
import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';

export default {
  name: "ArtistProfile",
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