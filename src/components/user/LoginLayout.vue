<template>
    <div>
        <h1>Connexion</h1>
        <p v-if="success">{{ success }}</p>
        <p v-for="error in errors" :key="error">{{ error }}</p>
        <div>
            <label for="username">Pseudo :</label>
            <input type="text" id="username" name="username" placeholder="Pseudo" v-model="username">
            <p>Adresse electronique oublié?</p>
        </div>
        <div>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" placeholder="Mot de passe" v-model="password">
            <p>Mot de passe oublié?</p>
        </div>
        <button v-on:click="sendForm">Se connecter</button>
        <br><br>
    </div>
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
                        } else {
                            // Add the error msg to our tpl
                            this.errors.push(data.message);
                        }

                    })
                }
            }
        }
    }
</script>

<style>

</style>