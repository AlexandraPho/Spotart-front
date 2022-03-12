<template>
    <header>
        <h1 class="title-logo">
            <router-link :to="{name: 'Home'}">Spot Art</router-link></h1>
        <ul class="header-links-list">
            <li class="header-link-element" v-for="artform in artforms" :key="artform.name">
                <router-link class="header-anchor-element" :to="{name: 'ArtForms', params: {id: artform.id}}">{{ artform.name }}s</router-link>
            </li>
        </ul>
        <div>
           
            <router-link class="link" v-if="!this.$store.state.token" to='/registration'>Inscription</router-link>
            <router-link class="link2" v-if="!this.$store.state.token" to='/login'>Connexion</router-link>
 
            <button @click="create" v-if="this.$store.state.token">Partager</button>
            <button @click="update" v-if="this.$store.state.token">Modifier</button>
            <button @click="disconnect" v-if="this.$store.state.token">Deconnexion</button>
        <!-- <div>  <router-link class="connexion-link"  v-if="this.$store.state.token == null" to="/connection">{{ this.$store.state.token == null ? 'Connexion' : 'mon compte'  }}</router-link> -->
        </div>
    </header>
</template>

<script>
    import ArtFormsService from '@/services/ArtFormsService'

    export default {
        name: 'HeaderLayout',
        data() {
            return {
                artforms: null,
                homeUrl: "/",
            }
        },
        mounted() {
            ArtFormsService.findAll().then(
                (response)=> {
                    console.log('Artforms', response.data);
                    this.artforms = response.data;
                }
            );    
        },
        methods: {
        disconnect() {
          
            console.log('disconnect')
            this.$store.commit('setToken', null);
            this.$store.commit('setUserID', null);
            this.$router.push('/')
        },

        create(){
            console.log('create')
            this.$store.commit('setToken', null);
            this.$store.commit('setUserID', null);
            this.$store.commit('setUserRole', null);
            this.$router.push('/artworks/create')

        },

        update(){
            console.log('update')
            this.$store.commit('setToken', null);
            this.$store.commit('setUserID', null);
            this.$store.commit('setUserRole', null);
            this.$router.push('/artworks/update/:id')
        }
   
       
    },
    }

    </Script>

<style scoped>

    header {
        background-color: #000000;
        display: flex;
        align-items: center;
        width: 100vw;
        max-width: 100%;
    }
    header .title-logo a {
        padding-left: 40px;
        flex-grow: 1;
        text-decoration: none;
        color: #ffffff;
        font-family: Cormorant Garamond;
    }
    header .title-logo router-link {
        text-decoration: none;
        color: #ffffff;
    }
    header .header-links-list {
        list-style: none;
        display: inline-flex;
        justify-content: center;
        gap: 20px;
        flex-grow: 2;
        color: #ffffff;
        font-size: xx-large;
    }
    header .header-links-list .header-anchor-element {
        color: #ffffff;
        font-size: xx-large;
        text-decoration: none;
    }
    header div {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        align-items: center;
        padding-right: 40px;
        gap: 20px;
    }
    header div .connexion-link {
        font-size: xx-large;
        color: #ffde59;
    }
  a.link {
       background-color: #ffde59;
    border-color: #ffde59;
    font-size: x-large;
    width: 100px;
    height: 34px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    }
a.link2{
  background-color: #ffde59;
    border-color: #ffde59;
    font-size: x-large;
    width: 100px;
    height: 34px;
    cursor: pointer;
    text-decoration: none;
    color: black;

}
 button{

 background-color: #ffde59;
    border-color: #ffde59;
    font-size: x-large;
    width: 145px;
    height: 34px;
    cursor: pointer;
    text-decoration: none;
    color: black;



 }


</style>