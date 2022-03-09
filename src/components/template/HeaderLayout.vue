<template>
    <header>
        <h1 class="title-logo">
            <router-link :to="homeUrl">Spot Art</router-link></h1>
        <ul class="header-links-list">
            <li class="header-link-element" v-for="artformlink in artformlinks" :key="artformlink.name">
                <router-link class="header-anchor-element" :to="artformlink.url">{{ artformlink.name }}</router-link>
            </li>
        </ul>
        <div>
            <router-link class="connexion-link" :to="loginlink">Connexion</router-link>
            <router-link :to="createArtworkLink">
                <button class="publish-button">Partagez vos créations</button>
            </router-link>
        </div>
    </header>
</template>

<script>
    import ArtFormsService from '@/services/ArtFormsService'

    export default {
        name: 'HeaderLayout',
        data() {
            return {
                loginlink : "/login",
                createArtworkLink: "/artwork/create",
                artforms: null,
                homeUrl: "/",
                artformlinks: [
                    {
                        name: "Sculptures",
                        url: "/art-form/2"
                    },
                    {
                        name: "Peintures",
                        url: "/art-form/3"
                    },
                    {
                        name: "Dessins",
                        url: "/art-form/4"
                    },
                    {
                        name: "Photographies",
                        url: "/art-form/5"
                    },
                ]
            }
        },
        mounted() {
            ArtFormsService.findAll(this.$route.params.id).then(
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