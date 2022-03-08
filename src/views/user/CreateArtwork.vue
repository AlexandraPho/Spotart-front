<template>
  <div>
    <HeaderLayout/>
    <CreateArtworkLayout/>
    <FooterLayout/>
  </div>

</template>

<script>
//On importe le composant PublishArtworkLayout
//pour pouvoir l'utiliser dans PublishArtwork
import CreateArtworkLayout from '@/components/CreateArtworkLayout.vue';
import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';
export default {
  name: 'CreateArtwork',
  components: { 
    CreateArtworkLayout,
    HeaderLayout,
    FooterLayout
  },

}
</script>

