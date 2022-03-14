<template>
    <div class="connexion-container">
        <div class="title">
            <h1>Connexion</h1>
        </div>
        <div class="succes-error-msg">
            <p v-if="success">{{ success }}</p>
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <div class="username-section">
            <label for="username">Pseudo :</label>
            <input type="text" id="username" name="username" placeholder="Pseudo" v-model="username">
            <!--<p>Adresse electronique oublié?</p>-->
        </div>
        <div class="password-section">
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" placeholder="Mot de passe" v-model="password">
            <!--<p>Mot de passe oublié?</p>-->
        </div>
        <button v-on:click="sendForm" v-if="!this.$store.state.token">Se connecter</button>
        <div class="create-account">
            <router-link :to="{name: 'Registration'}">Créer un compte</router-link>
        </div>
    </div>

    <!-- 
    <main class="main-container">
        <h1>Connexion</h1>
        <p v-if="success">{{ success }}</p>
         <router-link v-if="success" :to="{name: 'UserAccount', params: {userID : id}}">Acceder a mon compte</router-link>
        <p v-for="error in errors" :key="error">{{ error }}</p>
        <fieldset>
            <div class="field">
                <label class="field__label">Identifiant</label>
                <input v-model="username" class="field__input" type="text" placeholder="johndoe">
            </div>
            <div class="field">
                <label class="field__label">Mot de passe</label>
                <input v-model="password" class="field__input" type="password" placeholder="Mot de passe">
            </div>
        </fieldset>
        <button v-on:click="sendForm" class="button">Se connecter</button>
    </main>
 -->
</template>

<script>
    import UsersService from '@/services/UsersService';

    export default {
        name: "LoginLayout",
        data() {
            return {
                success: null,
                errors: [],
                username: null,
                password: null,
            }
        },
        methods: {
            sendForm() {
                this.errors = [];
                if(!this.username) {
                    this.errors.push("Username must not be empty");
                }
                if(!this.password) {
                    this.errors.push("Password must not be empty");
                }
                if(this.errors.length === 0) {
                    // On execute une requete pour recuperer un token
                    // The second argument is a callback
                    // that wil be exexuted from the connect() context
                    UsersService.connect({
                        username: this.username,
                        password: this.password
                    }, (data) => {
                        console.log('Users', data);
                        // Je verifie le type de réponse et j'affiche
                        // le message en consequence
                        if(data.type === "success") {
                            this.success = data.message;
                            this.$store.commit("setToken", null);
                            this.$store.commit("setUserID", null);
                            this.$router.push("/");
                        } else {
                            // Add the error msg to our tpl
                            this.errors.push(data.message);
                        }
                    })
                }
            },
        }
    }

/* import UsersService from '@/services/UsersService.js';

export default {
    name: "ConnectionLayout",
    data() {
        return {
            success: null,
            errors: [],
            username: null,
            password: null,
            userID : this.$store.state.userID,
        }
    },
    methods: {
        sendForm() {
            this.errors = [];
            if(!this.username) {
                this.errors.push("Username must not be empty");
            }
            if(!this.password) {
                this.errors.push("Password must not be empty");
            }
            if(this.errors.length === 0) {
                UsersService.connect({
                    username: this.username,
                    password: this.password
                }, (data) => {
                    // we are verifying the response type and we are displaying the message depending of the context
                    if(data.type === "success") {
                    alert('Bonjour ' + this.username + ' !');
                    this.$router.push({ name: "UserAccount", params: { id : this.$store.state.userID }})
                    } else {
                        this.errors.push(data.message);
                    }
                })
            }
        }
    }
} */

</script>