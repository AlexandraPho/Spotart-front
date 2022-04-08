<template>
    <main class="main-container">
        <h1>Modifier mon compte</h1>
        <form>
            <div class="account_section_creation" >
                <fieldset class="right_section">
                    <div class="field">
                        <label class="field__label">Adresse électronique :</label>
                        <input class="field__input" type="text" v-bind:placeholder="email">
                    </div>
                    <div class="field">
                        <label class="field__label">Mot de passe :</label>
                        <input class="field__input" type="password" placeholder="Mot de passe">
                    </div>
                    <div class="field">
                        <label class="field__label">Prénom :</label>
                        <input class="field__input" type="text" v-bind:placeholder="name">
                    </div>
                    <div class="field">
                        <label class="field__label">Nom :</label>
                        <input class="field__input" type="text" v-bind:placeholder="lastname">
                    </div>
                    <div class="field">
                        <label class="field__label">Pseudo :</label>
                        <input class="field__input" type="text" v-bind:placeholder="nickname">
                    </div>
                </fieldset>
                <fieldset class="left_section">
                    <div class="field">
                        <textarea v-bind:placeholder="description" class="field__input" rows="10" cols="50"></textarea>
                    </div>
                </fieldset>
                    <div class="div_button_submit">      
                        <button type="submit" class="button">Modifier votre compte</button>
                    </div>
                    <div class="div_button_submit">      
                        <button type="submit" class="button" v-if="this.$store.state.token && this.$store.getters.checkUserRole(['subscriber', 'artist'])" v-on:click="deleteUser(id)">Supprimer votre compte</button>
                    </div>
            </div> 
        </form>
      </main>
</template>

<script>
    //import UsersService from "@/services/UsersService.js";

    export default {
       
        name: 'InformationsUserLayout',
        props: {
        name: String,
        nickname: String,
        description: String,
        email: String,
        lastname: String
        },
        data() {
            return {
                user:null
            }
        },
        mounted() {
            //this.getUserbyId()
        },

        methods: {
            //getUserbyId() {
                //UsersService.getUserbyId().then(
                    //(response) => {
                        //console.log(response.data);
                        //this.users = response.data;
                    //}
                //)
            //},
            deleteUser(id) {
                this.$delete(this.users, id);
            },
        },
        
    }

</script>

<style scoped>

    .button {
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
        text-align: center;
        font-size: 1.5rem;
    }

    .main-container
    {
        padding: 0.5rem;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
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
        margin: 0 350px 0 350px;
    }

</style>