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
    font-size: 1.5em;
  }
  .connexion-container .title{
    justify-content: center;
    display: flex;
    margin-bottom: 2.5em;
  }
  .connexion-container .succes-error-msg {
    align-self: center;
  }
  .connexion-container .username-section,
  .password-section {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 15em;
    height: 3em;
    margin-bottom: 1em;
  }
  .connexion-container .username-section label,
  .password-section label {
    height: 2em;
    align-self: center;
  }
  .connexion-container .username-section input,
  .password-section input {
    height: 3em;
    border-radius: 0.3em;
  }
  .connexion-container button {
    align-self: center;
    font-size: 0.8em;
    width: 7em;
    height: 1.9em;
    margin: 2em;
    background-color: black;
    color: #ffde59;
    border-radius: 0.3em;
  }
  .connexion-container button:hover {
    background-color: #ffde59;
    color: black;
  }
  .connexion-container .create-account {
    align-self: center;
    margin-bottom: 2em;
  }
  .connexion-container .create-account a{
    text-decoration: none;
    color: black;
  }
</style>