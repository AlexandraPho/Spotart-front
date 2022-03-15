<template>
    <header>
        <h1 class="title-logo">
            <router-link :to="{name: 'Home'}">Spot Art</router-link>
        </h1>
        <ul class="header-links-list">
            <li class="header-link-element" v-for="artform in artforms" :key="artform.name">
                <router-link class="header-anchor-element" :to="{name: 'ArtForms', params: {id: artform.id}}">{{ artform.name }}s</router-link>
            </li>
        </ul>
<<<<<<< HEAD
        <div>
            <router-link class="connexion-link" :to="{name: 'Login'}"><i class="fa-solid fa-user"></i></router-link>
=======
        <div class="right-header">
            <router-link class="connexion-link" :to="{name: 'Login'}">Connexion</router-link>
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
            <router-link :to="{name: 'CreateArtwork'}">
                <button class="publish-button">Partagez vos créations</button>
            </router-link>

        <!-- <div>  <router-link class="connexion-link"  v-if="this.$store.state.token == null" to="/connection">{{ this.$store.state.token == null ? 'Connexion' : 'mon compte'  }}</router-link> -->
        </div>

    // <div>
      // <router-link class="link" v-if="!this.$store.state.token" to="/registration">Inscription</router-link>
      // <router-link class="login" v-if="!this.$store.state.token" to="/login">Connexion</router-link>
      // <router-link class="create" v-if="this.$store.state.token && this.$store.getters.checkUserRole(['artist'])" to='/artworks/create'>Publiez vos oeuvres</router-link>
      // <router-link class="update" v-if="this.$store.state.token && this.$store.getters.checkUserRole(['artist'])" to='/artworks/update/:id'>Modifiez votre oeuvre</router-link>
      // <button @click="disconnect" v-if="this.$store.state.token">Deconnexion</button>
      <!-- <div>  <router-link class="connexion-link"  v-if="this.$store.state.token == null" to="/connection">{{ this.$store.state.token == null ? 'Connexion' : 'mon compte'  }}</router-link> -->
    // </div>
  </header>

</template>

<script>
import ArtFormsService from "@/services/ArtFormsService";

export default {
  name: "HeaderLayout",
   data() {
    return {
      artforms: null,
      homeUrl: "/",
    };
  },
  mounted() {
    ArtFormsService.findAll().then((response) => {
      console.log("Artforms", response.data);
      this.artforms = response.data;
    });
  },
  methods: {
    disconnect() {
      console.log("disconnect");
      this.$store.commit("setToken", null);
      this.$store.commit("setUserID", null);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
<<<<<<< HEAD

    header {
        background-color: #000000;
        display: flex;
        align-items: center;
        /*width: 100vw;
        max-width: 100%;*/
    }
    header .title-logo a {
        padding-left: 1em;
        flex-grow: 1;
        text-decoration: none;
        font-family: Cormorant Garamond;
        background: linear-gradient(to right, grey 10%, white 60%,#ffde59  40%);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 15s linear infinite;
        display: inline-block;
=======
    header
    {
        background-color: black;
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        /* position: fixed; */
        z-index: 1000;
    }

    header h1
    {
        margin: 10px 0 10px 50px;
        font-size: xxx-large;
        background: linear-gradient(to bottom right, white 60%,#ffde59  40%);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 15s linear infinite;
        color: white;
        cursor: pointer;
        display: inline-block;
        flex-grow: 1;

>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
    }
    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
<<<<<<< HEAD
    header .header-links-list .header-anchor-element:hover{
        color: #ffde59;
        
    }
    /*header .title-logo router-link {
        text-decoration: none;
        color: #ffffff;
    }*/
    header .header-links-list {
        list-style: none;
        display: inline-flex;
        justify-content: center;
        gap: 0.5em;
        flex-grow: 2;
        color: #ffffff;
        font-size: 2em;
        margin-left: 6em;
=======

    header h1 a
    {
        text-decoration: none;
    }

    .header-links-list
    {
        margin: 10px 0 10px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 20px;
        padding: 0;
        flex-grow: 3;
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
    }

    .header-anchor-element
    {
        text-decoration: none;
        color: white;
        font-size: xx-large;
    }

    .header-anchor-element:hover
    {
        color: #ffde59;
    }

    .right-header
    {
        display: flex;
        align-items: center;
<<<<<<< HEAD
        padding-right: 1em;
        gap: 0.5em;
    }
    header div .connexion-link {
        font-size: 2em;
=======
        gap: 20px;
        margin: 10px 50px 10px 0;
    }

    .connexion-link
    {
        color: white;
        font-size: xx-large;
        text-decoration: none;
    }

    .connexion-link:hover
    {
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
        color: #ffde59;
        text-decoration: none;
    }
<<<<<<< HEAD
    header div .publish-button {
        background-color: black;
        color:#ffde59; 
        border: 2px solid #ffde59; 
        font-size: 1.5em;
        width: 10em;
        height: 1.7em;
        margin: 0em 1.5em;
        border-radius: 0.3em;
    }
    header div .publish-button:hover {
        background-color: #ffde59;
        color:black;
        transition-duration: 0.8s;
=======

    .publish-button
    {
        color: #ffde59;
        font-size: xx-large;
        border: solid 3px #ffde59;
        border-radius: 10px;
        background-color: black;
    }

    .publish-button:hover
    {
        background-color: #ffde59;
        color: black;
        cursor: pointer;
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
    }
</style>