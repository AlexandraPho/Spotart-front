<template>
  <div>
    <HeaderLayout/>
    <CreateArtworkLayout/>
    <!-- <div id="app">
    <div class="container" style="width:600px">
      <div class="my-4">
        <h3>Ajoutez une photo</h3>
        <h4>Fait nous découvrir ton talent!</h4>
      </div>
    </div>
    </div> -->
    <UploadServiceLayout/>
    <FooterLayout/>
  </div>

</template>

<script>
//On importe le composant PublishArtworkLayout
//pour pouvoir l'utiliser dans PublishArtwork
import CreateArtworkLayout from '@/components/CreateArtworkLayout.vue';
import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';
import UploadServiceLayout from "@/components/UploadServiceLayout.vue";
export default {
  name: 'CreateArtwork',
  components: { 
    CreateArtworkLayout,
    HeaderLayout,
    FooterLayout,
    UploadServiceLayout,
  },

}
</script>

