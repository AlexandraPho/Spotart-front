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
                    <div class="account-choice" v-if="isOpen">
                        <div class ="menu-item" ><router-link class="registration" v-if="!this.$store.state.token" to="/registration">Inscription</router-link></div>
                        <div class ="menu-item" ><router-link class="connexion-link" v-if="!this.$store.state.token" to="/login">Connexion</router-link></div>
                        <div class ="menu-item" ><router-link class="create" v-if="this.$store.state.token && this.$store.getters.checkUserRole(['artist'])" to='/artworks/create'>Partagez vos créations</router-link></div>
                        <div class ="menu-item" ><router-link class="update" v-if="this.$store.state.token && this.$store.getters.checkUserRole(['artist'])" to='/artworks/update/:id'>Modifiez vos publications</router-link></div>
                        <button class="connexion-link" @click="disconnect" v-if="this.$store.state.token">Deconnexion</button>
                    </div>
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

        /*Left side*/
        header
        {
            background-color: black;
            display: inline-flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }

        header h1
        {
            margin: 1.5rem;
            font-size: xx-large;
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

        /*Center*/
        .header-links-list {
            padding: 0;
            text-align: center;
            padding: 0;
        }

        .header-anchor-element {
            text-decoration: none;
            color: white;
            font-size: 1rem;
        }

        .header-anchor-element:hover {
            color: #ffde59;
        }

        /*Right side*/
        .right-header 
        {
            margin: 2rem;
            margin-left: 2rem;
            position: relative;
            display: inline-block; 
        }

        .icon-account {
            color:#ffde59 ;
            font-size: 0.9rem;
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
            box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
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

    @media (min-width: 768px) and (max-width: 1200px) {

        /*Left side*/
        header
        {
            background-color: black;
            display: inline-flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }

        header h1
        {
            margin: 1.5rem;
            font-size: xx-large;
            background: linear-gradient(to bottom right, white 60%,#ffde59 40%);
            background-size: auto auto;
            background-clip: border-box;
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-animation: textclip-06fcd9d2 15s linear infinite;
            animation: textclip-06fcd9d2 15s linear infinite;
            color: white;
            cursor: pointer;
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

        /*Center*/
        .header-links-list
        {
            margin: 0.5rem;
            display: flex;
            justify-content: center;
            list-style: none;
            gap: 15px;
            padding: 0;
        }

        .header-anchor-element
        {
            text-decoration: none;
            color: white;
            font-size: x-large;
        }

        .header-anchor-element:hover
        {
            color: #ffde59;
        }

        /*Right side*/
        .right-header
        {
            margin: 2rem;
            margin-left: 2rem;
            position: relative;
            display: inline-block;
        }

        .icon-account {
            color:#ffde59 ;
            font-size: 0.9rem;
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
            box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
            padding: 0.5rem;
            z-index: 1;
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

    @media (min-width: 1200px) {

        header {
            background-color: black;
            display: inline-flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }

        header h1 {
            margin: 2rem;
            font-size: xxx-large;
            background: linear-gradient(to bottom right, white 60%,#ffde59 40%);
            background-size: auto auto;
            background-clip: border-box;
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-animation: textclip-06fcd9d2 15s linear infinite;
            animation: textclip-06fcd9d2 15s linear infinite;
            color: white;
            cursor: pointer;
            
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
            display: flex;
            justify-content: center;
            list-style: none;
            gap: 20px;
            padding: 0;
            margin: 2rem;
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
            margin: 2rem;
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
            z-index: 1;
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