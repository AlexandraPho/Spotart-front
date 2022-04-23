<template>
    <h1>Connexion</h1>

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
        <button class="login-button" v-on:click="sendForm">Se connecter</button>
        <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
        <button class="signup-button"><router-link :to="{name: 'Registration'}">Inscription</router-link></button>
    </div>
</template>

<script>
    import UsersService from '@/services/UsersService';
    import confirmDialogue from '../popup/confirmDialogue.vue'

    export default {
        name: "LoginLayout",
        components: { confirmDialogue },
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
                            this.$refs.confirmDialogue.show({
                                title: 'Bonjour ' + this.username + ' !',
                                //okButton: 'Delete Forever',
                            })
                            //alert('Bonjour ' + this.username + '!');
                            //this.success = "Vous êtes authentifié !";
                            
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

    @media (min-width: 320px) and (max-width: 768px) {

        h1 
        {
            text-align: center;
        }

        h1::after
        {
            border-top: 0.2rem solid #FFDE59;
            display: block;
            margin-top: 0.5rem;
            top: 0.5rem;
            margin: 0 auto;
            width: 6rem;
            content: "";
        }

        .login-form
        {
            margin: 1.5rem;
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
            width: 65%;
        }

        .field__input
        {
            border: 1px solid rgb(184, 182, 182);
            border-radius: 0.5rem;
            /*background-color: #F0F4EE;*/
            margin-bottom: 0.5rem;
            background-color: #D3D3D3;
            padding: 0 10px 0 10px;
            font-size: 1rem;
            height: 2rem;
        }

        .field__input:focus
        {
            outline-color: #FFDE59;
            outline-width: 1px;
        }


        .field__label
        {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .login-button,
        .signup-button 
        {
            font-size: large;
            width: 30%;
        }

        .login-button 
        {
            text-align: center;
            border-radius: 10px;
            background-color: #FFDE59;
            margin: 1em;
            padding: 0.5em;
            display: inline-block;
            border: 4px #CCCCCC;
            transition: all 0.5s;
            cursor: pointer;
            font-size: large;
        }
        
        .signup-button 
        {
            /*text-align: center; */
            border-radius: 10px;
            margin: 1em;
            padding: 0.5em;
            display: inline-block;
            border: 4px #CCCCCC;
            transition: all 0.5s;
            cursor: pointer;
            font-size: large;
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
            margin-top: 0.5rem;
            top: 0.5rem;
            margin: 0 auto;
            width: 6rem;
            content: "";
        }

        .login-form
        {
            margin: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 5rem;
        }

        .field
        {
            display: flex;
            flex-direction: column;
            margin: 1rem;
            text-align: center;
            width: 65%;
        }

        .field__input
        {
            border: 1px solid rgb(184, 182, 182);
            border-radius: 0.5rem;
            /*background-color: #F0F4EE;*/
            margin-bottom: 0.5rem;
            background-color: #D3D3D3;
            padding: 0 10px 0 10px;
            font-size: 1rem;
            height: 2rem;
        }
        
        .field__input:focus
        {
            outline-color: #FFDE59;
            outline-width: 1px;
        }


        .field__label
        {
            text-align: center;
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

        .login-button,
        .signup-button 
        {
            font-size: large;
            width: 30%;
            margin-top: 3rem;
        }

        .login-button 
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
        }
        
        .signup-button 
        {
            border-radius: 10px;
            padding: 0.5em;
            display: inline-block;
            border: 4px #CCCCCC;
            transition: all 0.5s;
            cursor: pointer;
            font-size: large;
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
            margin-top: 0.5rem;
            top: 0.5rem;
            margin: 0 auto;
            width: 8rem;
            content: "";
        }

        p
        {
            text-align: center;
            font-size: 1.2rem;;
        }

        .login-form
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

        .login-button,
        .signup-button 
        {
            width: 20%;
            margin-top: 3rem;
        }

        .login-button 
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
        }
        .signup-button 
        {
            border-radius: 10px;
            padding: 0.5em;
            display: inline-block;
            border: 4px #CCCCCC;
            transition: all 0.5s;
            cursor: pointer;
            font-size: large;
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
    }

</style>