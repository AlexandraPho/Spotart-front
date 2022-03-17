<template>
    <h1 class="title">Créer un compte</h1>

    <div class="container-form1">
        <div class="container">
            <form class="signup-form">

                <p v-if="success">{{ success }}</p>
                <p v-for="error in errors" :key="error">{{ error }}</p>

                <div class="field">
                    <label class="field__label" for="email">Adresse email</label>
                    <input class="field__input" v-model="email" type="email" id="email" name="email" placeholder="robert@gmail.com" />
                </div>

                <div class="field">
                    <label class="field__label" for="password">Mot de passe</label>
                    <input class="field__input" v-model="password" type="password" id="password" name="password" placeholder="Mot de passe" />
                </div>

                <div class="field">
                    <label class="field__label" for="password-confirmation">Confirmation du mot de passe</label>
                    <input class="field__input" v-model="password_check" id="password-confirmation" type="password" name="password-confirmation" placeholder="Confirmez votre mot de passe" />
                </div>

                <div class="field">
                    <label class="field__label" for="username">Identifiant</label>
                    <input class="field__input" v-model="username" id="username" type="username" name="username" placeholder="Identifiant" />
                </div>
                <!--<div id="app">
                        <div v-if="!illustration">
                            <h2>Choisir une photo</h2>
                            <input type="file" @change="onFileChange" />
                        </div>
                        <div v-else>
                            <img :src="illustration">
                            <button @click="removeIllustration">Remove image</button>
                        </div>
                </div> -->
                <div class="field">
                    <label class="field__label">Choisissez votre type de profil</label>
                    <select v-model="role">
                        <option value="subscriber">Abonné / Abonnée</option>
                        <option value="artist">Artiste</option>
                    </select>
                </div>
                <button v-on:click="sendForm" class="create-account" type="button">Créer un compte</button>
                <br><br><br>
            </form>
        </div>
        <div class="white-background"></div>
    </div>
    
</template>


<script>
    import UsersService from "@/services/UsersService.js";

    export default {
        name: "RegistrationLayout",
        data() {
            return {
                success: null,
                errors: [],
                email: null,
                password: null,
                password_check: null,
                username: null,
                role: null,   
            }
        },
        methods: {
            sendForm() {
                this.errors = [];
                if (!this.email) {
                    this.errors.push("Le champ d'adresse email doit être remplis");
                }
                if (!this.password || !this.password_check) {
                    this.errors.push("Le(s) champ(s) mot de passe et/ou sa confirmation doivent être remplis");
                }
                if (this.password !== this.password_check) {
                    this.errors.push("Les champs mot de passe et sa confirmation, ne sont pas identiques");
                }
                if (!this.username) {
                    this.errors.push("Le champ d'identifiant doit être remplis");
                }
                if (!this.role || this.role == "") {
                    this.errors.push("Un rôle doit être choisis");
                }
                UsersService.register({
                    email: this.email,
                    password: this.password,
                    username: this.username,
                    role: this.role,
                }, (data) => {

                    if(data.type === "success") {
                        this.success = `Bienvenue, ${this.username}`;
                    } else {
                        this.errors.push(data.message);
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .signup-form
    {
        margin: 50px 350px 0 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p
    {
        text-align: center;
        font-size: x-large;
    }
    .create-account {
        text-align: center;
        border-radius: 10px;
        background-color: #FFDE59;
        margin: 2em 1em 7em 1em;
        padding: 0.5em;
        display: inline-block;
        border: 4px #CCCCCC;
        width: 15%;
        transition: all 0.5s;
        cursor: pointer;
        font-size: large;
    }

    button:hover
    {
        background-color: #FAECB3;
    }

    h1::after
    {
        border-top: 0.2rem solid #FFDE59;
        display: block;
        position: relative;
        top: 0.5rem;
        margin: 0 auto;
        width: 10%;
        content: "";
    }

    h1
    {
        margin-top: 50px;
        text-align: center;
        font-size: xx-large;
    }

    .main-container
    {
        padding: 0.5rem;
        width: 90%;
    }

    .right_section
    {
        border: none;
    }

    .left_section
    {
        border: none
    }

    .field__label
    {
        text-align: left;
        font-size: x-large;
        margin-bottom: 5px
    }

    .field__input
    {
        border: 1px solid rgb(184, 182, 182);
        border-radius: 0.5rem;
        background-color: #F0F4EE;
        margin-bottom: 0.5rem;
        background-color: #D3D3D3;
        padding: 0 10px 0 10px;
        font-size: x-large;
        height: 40px;
        width: 1000px;
    }

    .field__input:focus
    {
        outline-color: #FFDE59;
        outline-width: 1px;
    }

    .textarea.field__input
    {
        width: 100%;
        height: 8rem;
        padding: 1rem 2rem;
        border: none;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    .field
    {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 30px 350px 0 350px;
    }

    .white-background
    {
        height: 60px;
    }

</style>