<template>
  <div>
  <HeaderLayout />
  <ConnexionFormLayout />
  <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
import ConnexionFormLayout from '@/components/UserProfile/ConnexionFormLayout.vue'
export default {
  name: 'ConnectionUser',
  components: {
    HeaderLayout,
    FooterLayout,
    ConnexionFormLayout
  }
}
</script>

<style>
</style>
