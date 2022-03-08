<template>
    <header>
        <h1 class="title-logo">Spot Art</h1>
        <ul class="header-links-list">
            <li class="header-link-element" v-for="artFormsLink in artFormsLinks" :key="artFormsLink.name">
                <router-link class="header-anchor-element" :to="artFormsLink.route">{{ artFormsLink.name }}</router-link>
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

    export default {
        name: 'HeaderLayout',
        data() {
            return {
                artFormsLinks: [
                    {
                        name: "Sculptures",
                        route: "/artforms/3"
                    },
                    {
                        name: "Peintures",
                        route: "/artforms/1"
                    },
                    {
                        name: "Photographies",
                        route: "/artforms/2"
                    },
                    {
                        name: "Dessins",
                        route: "/artforms/0"
                    },
                ],
                loginlink : "/login",
                createArtworkLink: "/artworks/create"
            }
        }
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
    header .title-logo {
        padding-left: 40px;
        flex-grow: 1;
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