<template>
    <HeaderLayout />
    <LoginLayout />
    <FooterLayout />

    <!--   <div>
  <HeaderLayout />
  <ConnexionFormLayout />
  <FooterLayout />
  </div> -->
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import LoginLayout from '@/components/user/LoginLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';

    export default {
        name: "LoginApp",
        components: {
            HeaderLayout,
            LoginLayout,
            FooterLayout
        }
    }

/* import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
import ConnexionFormLayout from '@/components/UserProfile/ConnexionFormLayout.vue'
export default {
  name: 'ConnectionUser',
  components: {
    HeaderLayout,
    FooterLayout,
    ConnexionFormLayout
  }
} */

</script>

<style>
  .connexion-container {
    display: flex;
    flex-direction: column;
  }
  .connexion-container .title{
    justify-content: center;
    display: flex;
  }
  .connexion-container .username-section,
  .password-section {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 20em;
    height: 5em;
  }
</style>