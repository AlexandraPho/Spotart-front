<template>
    <header>
        <h1 class="title-logo">Spot Art</h1>
        <ul class="header-links-list">
            <li class="header-link-element"><a class="header-anchor-element" href="#">Sculptures</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" href="#">Peintures</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" href="#">Photographies</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" href="#">Dessins</a></li>
        </ul>
        <div>  <router-link class="connexion-link"  v-if="this.$store.state.token == null" to="/connection">{{ this.$store.state.token == null ? 'Connexion' : 'mon compte'  }}</router-link>
        
            <button class="publish-button">Partagez vos créations</button>
            
        </div>
    </header>
</template>

<script>

    export default {
        name: 'HeaderLayout',
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