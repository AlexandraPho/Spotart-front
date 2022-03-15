<template>
    <header>
        <h1 class="title-logo">
            <router-link :to="{name: 'Home'}">Spot Art</router-link></h1>
        <ul class="header-links-list">
            <li class="header-link-element" v-for="artform in artforms" :key="artform.name">
                <router-link class="header-anchor-element" :to="{name: 'ArtForms', params: {id: artform.id}}">{{ artform.name }}s</router-link>
            </li>
        </ul>
        <div class="right-header">
            <router-link class="connexion-link" :to="{name: 'Login'}">Connexion</router-link>
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

    }
    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }

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
        color: #ffde59;
    }

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
    }
</style>