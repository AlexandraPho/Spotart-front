<template>
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
</template>

<script>
import UsersService from '@/services/UsersService.js';

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
}
</script>

<style src="@/assets/CSS/signup.css">

</style>