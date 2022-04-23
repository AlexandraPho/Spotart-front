<template>
    <h1>Créer un compte</h1>

        <div class="signup-form">
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
                    this.errors.push("L'email doit être remplis");
                }
                if (!this.password || !this.password_check) {
                    this.errors.push("Le mot de passe et/ou sa confirmation doivent être remplis");
                }
                if (this.password !== this.password_check) {
                    this.errors.push("Le mot de passe et sa confirmation, ne sont pas identiques");
                }
                if (!this.username) {
                    this.errors.push("L'identifiant doit être remplis");
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
                        this.$router.push({ name: 'Login' })
                    } else {
                        this.errors.push(data.message);
                    }
                })
            }
        }
    }
</script>

<style scoped>

    @media (min-width: 320px) and (max-width: 768px) {

        h1
        {
            margin-top: 2rem;
            text-align: center;
            font-size: 2rem;
        }

        h1::after
        {
            border-top: 0.2rem solid #FFDE59;
            display: block;
            position: relative;
            top: 0.5rem;
            margin: 0 auto;
            width: 10rem;
            content: "";
        }
        
        .signup-form
        {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .field
        {
            display: flex;
            flex-direction: column;
            margin: 0.5rem;
            text-align: center;
        }

        .field__label
        {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .field__input
        {
            border: 1px solid rgb(184, 182, 182);
            border-radius: 0.5rem;
            background-color: #F0F4EE;
            margin-bottom: 0.5rem;
            background-color: #D3D3D3;
            padding: 0 10px 0 10px;
            font-size: 1rem;
            width: 15rem;
            height: 1.5rem;
            align-self: center
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

        select 
        {
            width: 60%;
            height: 1.5rem;
            align-self: center;
            border-radius: 0.5rem;
        }

        .create-account 
        {
            border-radius: 0.5rem;
            background-color: #FFDE59;
            margin: 1.5rem;
            padding: 0.5em;
            display: flex;
            border: 4px #CCCCCC;
            transition: all 0.5s;
            cursor: pointer;
            font-size: large;
            align-items: center;
        }

        button:hover
        {
            background-color: #FAECB3;
        }

    }

    @media (min-width: 768px) and (max-width: 1200px) {
        h1
        {
            margin-top: 3rem;
            text-align: center;
            font-size: 2rem;
        }

        h1::after
        {
            border-top: 0.2rem solid #FFDE59;
            display: block;
            position: relative;
            top: 0.5rem;
            margin: 0 auto;
            width: 8rem;
            content: "";
        }
        
        .signup-form
        {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .field
        {
            display: flex;
            flex-direction: column;
            margin: 0.5rem;
            text-align: center;
        }

        .field__label
        {
            text-align: center;
            font-size:  1.2rem;
            margin-bottom: 0.5rem;
        }

        .field__input
        {
            border: 1px solid rgb(184, 182, 182);
            border-radius: 0.5rem;
            background-color: #F0F4EE;
            margin-bottom: 0.5rem;
            background-color: #D3D3D3;
            padding: 0 10px 0 10px;
            font-size: 1rem;
            width: 25rem;
            height: 2.5rem;
            align-self: center;
        }

        .field__input:focus
        {
            outline-color: #FFDE59;
            outline-width: 1px;
        }

        select 
        {
            width: 20rem;
            height: 2.5rem;
            align-self: center;
            border-radius: 0.5rem;
        }

        .create-account 
        {
            border-radius: 0.5rem;
            background-color: #FFDE59;
            margin: 1.5rem;
            padding: 0.5em;
            display: flex;
            border: 4px #CCCCCC;
            transition: all 0.5s;
            cursor: pointer;
            font-size: large;
            align-items: center;
        }

        button:hover
        {
            background-color: #FAECB3;
        }
    }
    @media (min-width: 1200px) {

        h1
        {
            margin-top: 3rem;
            text-align: center;
            font-size: 2.5rem;
        }

        h1::after
        {
            border-top: 0.2rem solid #FFDE59;
            display: block;
            position: relative;
            top: 0.5rem;
            margin: 0 auto;
            width: 10rem;
            content: "";
        }

        p
        {
            text-align: center;
            font-size: x-large;
        }
    
        .signup-form
        {
            margin: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .field
        {
            display: flex;
            flex-direction: column;
            margin: 1rem;
            width: 40%;
        }

        .field__label
        {
            text-align: left;
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

        .field__input
        {
            border: 1px solid rgb(184, 182, 182);
            border-radius: 0.5rem;
            background-color: #F0F4EE;
            margin-bottom: 0.5rem;
            background-color: #D3D3D3;
            padding: 0 10px 0 10px;
            font-size: 1rem;
            height: 2.5rem;
        }

        .field__input:focus
        {
            outline-color: #FFDE59;
            outline-width: 1px;
        }

        select
        {
            height: 2rem;
            width: 40%;
            border-radius: 0.5rem;
        }

        .create-account 
        {
            text-align: center;
            border-radius: 10px;
            background-color: #FFDE59;
            padding: 0.5em;
            display: inline-block;
            border: 4px #CCCCCC;
            transition: all 0.5s;
            cursor: pointer;
            font-size: large;
            width: 20%;
            margin: 2.5rem;
        }

        button:hover
        {
            background-color: #FAECB3;
        }
    }
</style>