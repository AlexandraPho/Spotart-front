<template>
    <header>
        <h1 class="title-logo" @click='goToHome()'>Spot Art</h1>
        <ul class="header-links-list">
            <li class="header-link-element"><a class="header-anchor-element" @click='goToSculpturPage()'>Sculptures</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" @click='goToPaintPage()'>Peintures</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" @click='goToPhotographyPage()'>Photographies</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" @click='goToDrawingPage()'>Dessins</a></li>
        </ul>
        <div>
            <a class="connexion-link" href="#">Connexion</a>
            <button class="publish-button">Partagez vos créations</button>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'HeaderLayout',
        data() {
            return {
                sculpturs: [],
                paints: [],
                photography: [],
                drawing: [],
            }
        },
        methods:{
            goToHome() {
                this.$router.push('/'); 
            },
            goToSculpturPage(){
                this.$router.push('/category/3'); 
            },
            goToPaintPage(){
                this.$router.push('/category/1'); 
            },
            goToPhotographyPage(){
                this.$router.push('/category/6'); 
            },
            goToDrawingPage(){
                this.$router.push('/category/5'); 
            },
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