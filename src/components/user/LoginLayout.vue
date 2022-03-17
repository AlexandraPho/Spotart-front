<template>
    <br>
    <h1>Connexion</h1>
    <br>
    <div class="login-form">
        <p v-if="success">{{ success }}</p>
        <p v-for="error in errors" :key="error">{{ error }}</p>
    
        <div class="field">
            <label class="field__label" for="username">Identifiant</label>
            <input class="field__input" v-model="username" id="username" type="username" name="username" placeholder="Identifiant" />
        </div>
        <div class="field">
            <label class="field__label" for="password">Mot de passe</label>
            <input class="field__input" v-model="password" type="password" id="password" name="password" placeholder="Mot de passe" />
        </div>
        <br>
        <div class="div_button_submit">
            <button class="login-button" v-on:click="sendForm">Se connecter</button>
        </div>
        <br>
        <div class="div_button_submit">
            <button class="signup-button"><router-link :to="{name: 'Registration'}">Inscription</router-link></button>
        </div>
    </div>
    <div class="white-background"></div>
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
                    this.errors.push("Le champs identifiant doit être fourni");
                }
                if(!this.password) {
                    this.errors.push("Le champs mot de passe doit être fourni");
                }
                if(this.errors.length === 0) {
                    UsersService.connect({
                        username: this.username,
                        password: this.password
                    }, (data) => {
                        console.log('Users', data);
                        if(data.type === "success") {
                            this.success = "Vous êtes authentifié !";
                        } else {
                            this.errors.push(data.message);
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .login-form
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
    .white-background
    {
        margin-top: 360px;
    }
    .login-button {
        text-align: center;
        border-radius: 10px;
        background-color: #FFDE59;
        margin: 1em;
        padding: 0.5em;
        display: inline-block;
        border: 4px #CCCCCC;
        width: 15%;
        transition: all 0.5s;
        cursor: pointer;
        font-size: large;
        width: 249px;
    }
    .signup-button {
        text-align: center;
        border-radius: 10px;
        background-color: #D3D3D3;
        margin: 1em;
        padding: 0.5em;
        display: inline-block;
        border: 4px #D3D3D3;
        width: 15%;
        transition: all 0.5s;
        cursor: pointer;
        width: 249px;
    }
    .signup-button a
    {
        text-decoration: none;
        color: black;
        font-size: large;
    }
    button:hover
    {
        background-color: #FAECB3;
    }
    .div_button_submit
    {
        display:flex;
        justify-content: center;
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
        background-color: #D3D3D3; /* #FFEBCD */
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

    .field
    {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 30px 350px 0 350px;
    }
</style>