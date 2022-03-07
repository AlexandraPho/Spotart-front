<template>
  <div>
    <HeaderLayout/>
    <PublishArtworkLayout/>
    <FooterLayout/>
  </div>

</template>

<script>
//On importe le composant PublishArtworkLayout
//pour pouvoir l'utiliser dans PublishArtwork
import PublishArtworkLayout from '@/components/PublishArtworkLayout.vue';
import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';
export default {
  name: 'PublishArtwork',
  components: { 
    PublishArtworkLayout,
    HeaderLayout,
    FooterLayout
  },

}
</script>

