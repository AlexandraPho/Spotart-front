<template>
  <div>
    <HeaderLayout/>
    <EditArtworkLayout/>
    <FooterLayout/>
  </div>

</template>

<script>
//On importe le composant EditArtworkLayout
//pour pouvoir l'utiliser dans EditArtwork
import EditArtworkLayout from '@/components/EditArtworkLayout.vue'
import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
export default {
  name: 'EditArtwork',
  components: { 
    EditArtworkLayout,
    HeaderLayout,
    FooterLayout
  },

}
</script>

