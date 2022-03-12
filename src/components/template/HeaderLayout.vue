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
        <div>
            <router-link class="connexion-link" :to="{name: 'Login'}">Connexion</router-link>
            <router-link :to="{name: 'CreateArtwork'}">
                <button class="publish-button">Partagez vos créations</button>
            </router-link>

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
    }
</script>

<style scoped>

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
        background: linear-gradient(to right, #ffde59 10%, white 50%,#ffde59  60%);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 8s linear infinite;
        display: inline-block;
    }
    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
    header .title-logo a:hover,
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
        padding-right: 1em;
        gap: 0.5em;
    }
    header div .connexion-link {
        font-size: 1.5em;
        color: #ffde59;
        text-decoration: none;
    }
    header div .publish-button {
        background-color: black;
        color:#ffde59; 
        border: 2px solid #ffde59; 
        font-size: 1.5em;
        width: 10em;
        height: 1.7em;
        margin-left: 1em;
        border-radius: 0.2em;
    }
    header div .publish-button:hover {
        background-color: #ffde59;
        color:black;
        transition-duration: 0.8s;
    }
</style>