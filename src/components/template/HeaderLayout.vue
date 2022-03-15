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
                    this.artforms = response.data;
                    //console.log('Artforms', response.data);
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
    header div .publish-button {
        background-color: #ffde59;
        border-color: #ffde59;
        font-size: x-large;
        width: 250px;
        height: 50px;
        cursor: pointer;
    }
</style>