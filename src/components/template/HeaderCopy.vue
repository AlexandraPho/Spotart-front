<template>
    <header>
        <h1 class="title-logo">
            <router-link :to="{ name: 'Home' }">Spot Art</router-link>
        </h1>
        <ul class="header-links-list">
            <li class="header-link-element" v-for="artform in artforms" :key="artform.name">
                <router-link class="header-anchor-element" :to="{ name: 'ArtForms', params: { id: artform.id } }">{{ artform.name }}s</router-link>
            </li>
        </ul>
        <div class="right-header">
            <button class="icon-account" ref="menu" @click="isOpen = !isOpen">Mon compte</button>
                <!--<transition name="fade" apear>-->
                    <div class="account-choice" v-if="isOpen">
                        <div class ="menu-item" ><router-link class="registration" v-if="!this.$store.state.token" to="/registration">Inscription</router-link></div>
                        <div class ="menu-item" ><router-link class="connexion-link" v-if="!this.$store.state.token" to="/login">Connexion</router-link></div>
                        <div class ="menu-item" ><router-link class="create" v-if="this.$store.state.token && this.$store.getters.checkUserRole(['artist'])" to='/artworks/create'>Publiez vos oeuvres</router-link></div>
                        <div class ="menu-item" ><router-link class="update" v-if="this.$store.state.token && this.$store.getters.checkUserRole(['artist'])" to='/artworks/update/:id'>Modifiez votre oeuvre</router-link></div>
                        <button class="connexion-link" @click="disconnect" v-if="this.$store.state.token">Deconnexion</button>
                    </div>
                <!--</transition>-->
            <!-- <div>  <router-link class="connexion-link"  v-if="this.$store.state.token == null" to="/connection">{{ this.$store.state.token == null ? 'Connexion' : 'mon compte'  }}</router-link> -->
        </div>
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
            messageText:'',
            isOpen: false
            };
        },
        props : {
            userName: String,
            
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
        
            sendMessage() {
                this.$emit('messagesent', {
                    message: this.messageText,
                    user: {
                        name: this.userName
                    }
                });
                this.messageText = '';
            },
        },	 
    };
</Script>

<style scoped>

    @media (min-width: 320px) and (max-width: 768px) {

        
    }

    @media (min-width: 768px) and (max-width: 1200px) {

        header
        {
            background-color: black;
            display: inline-flex;
            justify-content: space-between;
            width: 100%;
        }

        header h1
        {
            margin: 10px 0 10px 20px;
            font-size: x-large;
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

        header h1:hover
        {
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            transform:scale(1.1);
        }

        .header-links-list
        {
            margin: 10px 0 10px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            list-style: none;
            gap: 15px;
            padding: 0;
            flex-grow: 3;
        }

        .header-anchor-element
        {
            text-decoration: none;
            color: white;
            font-size: large;
        }

        .header-anchor-element:hover
        {
            color: #ffde59;
        }

        .right-header
        {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 20px 10px 0;
        }

        .connexion-link
        {
            color: white;
            font-size: 1rem;
            text-decoration: none;
        }

        .signup
        {
        display: none;
        }

        .right-header button:hover
        {
            background-color: #ffde59;
            color: black;
            cursor: pointer;
        }

        .connexion-link:hover
        {
            color: #ffde59;
        }

        .publish-button
        {
            color: #ffde59;
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
    }

    @media (min-width: 1200px) {

        header {
            background-color: black;
            display: inline-flex;
            justify-content: space-between;
            width: 100%;
        }

        header h1 {
            margin: 10px 0 10px 30px;
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

        header h1 a {
            text-decoration: none;
        }

        header h1:hover {
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            transform:scale(1.1);
        }

        .header-links-list {
            margin: 10px 260px 10px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            list-style: none;
            gap: 20px;
            padding: 0;
            flex-grow: 3;
        }

        .header-anchor-element {
            text-decoration: none;
            color: white;
            font-size: 1.5rem;
        }

        .header-anchor-element:hover {
            color: #ffde59;
        }

        .right-header {
            /* align-items: center; */
            margin: 1.5rem 3rem;
            position: relative;
            display: inline-block;      
        }
        
        .icon-account {
            color:#ffde59 ;
            font-size: 1.2rem;
            padding: 0.2rem;
            border-radius: 0.5rem;
            border: solid 0.1rem #ffde59;
            text-decoration: none;
            position: static;
        }

        .icon-account,
        .account-choice {
            background-color: black;
        }

        .account-choice {
            position: absolute;
            background-color: black;
            min-width: 8rem;
            box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
            margin-right: 3rem;
            padding: 0.5rem;
        }

        .menu-item a {
            text-decoration: none;
            color: #ffde59;
        }

        .menu-item,
        .connexion-link,
        .create {
            margin-top: 0.5rem;
        }

        .connexion-link,
        .create {
            background-color: black;
            color: #ffde59;
            border: none;
            font-size: 1rem;
        }

        .registration:hover,
        .connexion-link:hover,
        .create:hover,
        .update:hover {
            color: white;
            cursor: pointer;
        }
    }
</style>