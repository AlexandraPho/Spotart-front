<template>
  <div>
    <HeaderLayout/>
    <UpdateArtworkLayout/>
    <FooterLayout/>
  </div>

</template>

<script>
//On importe le composant EditArtworkLayout
//pour pouvoir l'utiliser dans EditArtwork
import UpdateArtworkLayout from '@/components/UpdateArtworkLayout.vue'
import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
export default {
  name: 'UpdateArtwork',
  components: { 
    UpdateArtworkLayout,
    HeaderLayout,
    FooterLayout
  },

}
</script>

