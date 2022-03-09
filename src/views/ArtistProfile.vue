<template>
  <div>
    <ArtistDetailLayout
      v-if="artist"
      v-bind:title="artist.title.rendered"
      v-bind:content="artist.content.rendered"
     v-bind:image="artist._embedded ? artist._embedded['wp:featuredmedia'][0].source_url : 'http://spotart.local/app/uploads/2022/02/exo5.png'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// On import le composant HelloWorld pour pouvoir
// L'utiliser dans Home.vue
//import HelloWorld from '@/components/HelloWorld.vue'

import ArtistDetailLayout from "@/components/ArtistDetailLayout.vue";

import ArtistsServices from "@/services/ArtistsServices.js";

// export default permet de definir une carte d'identité
// de mon home.vue
// Qui contient son nom et tout les composants qui sont utilisés
// Dedans
// Cette carte d'identité permet d'interagir avec home.vue
export default {
  name: "ArtistProfile",
  data() {
    return {
      artist: null,
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    // Attention, on ne traite pas pour l'instant les cas d'erreurs

    ArtistsServices.find(this.$route.params.id).then(
      // Executer le code qui permet de recuperer le résultat de ma requete
      // Permet de garder le contexte et de recuperer response
      (response) => {
        console.log(response.data);
        this.artist = response.data;
      }
    );
  },
  components: {
    ArtistDetailLayout,
  },
};
</script>

<style src>
</style>