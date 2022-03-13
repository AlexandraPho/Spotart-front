<template>
    <div class="create-account-container">
        <h1 class="title">Créer un compte</h1>
        <div class="succes-error-msg">
            <!-- <p v-if="success">{{ success }}</p> -->
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
            <form class="form">
                <div class="profil-info">
                    <div class="email">
                        <label for="email">Adresse email</label>
                        <input v-model="email" type="email" id="email" name="email" placeholder="robert@gmail.com" />
                        <i class="fas fa-at icon"></i>
                    </div>
                    <div class="password">
                        <label for="password">Mot de passe</label>
                        <input v-model="password" type="password" id="password" name="password" placeholder="Mot de passe" />
                        <i class="fa fa-lock icon" aria-hidden="true"></i>
                    </div>
                    <div class="password-confirmation">
                        <label for="password-confirmation">Confirmation du mot de passe</label>
                        <input v-model="password_check" id="password-confirmation" type="password-confirmation" name="password-confirmation" placeholder="Confirmer votre mot de passe" />
                        <i class="fa fa-lock icon" aria-hidden="true"></i>
                    </div>
                    <div class="username">
                        <label for="username">Pseudonyme</label>
                        <input v-model="username" id="username" type="username" name="username" placeholder="Pseudonyme" />
                        <i class="fa fa-portrait icon"></i>
                    </div>
                </div>
                <div class="profil-description">
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
                        <label for="description">Description (optionnel)</label>
                        <textarea v-model="description" class="field_input" placeholder="Biographie"></textarea>
                    </div>
                    <div class="role">
                        <label class="chose">Choisissez votre type de profil</label>
                            <select v-model="role">
                            <option value="subscriber">Abonné / Abonnée</option>
                            <option value="artist">Artiste</option>
                        </select>
                    </div>
                </div>
                
            </form>
            <div class="send-button">
                    <button v-on:click="sendForm" class="create-account" type="button">Créer un compte</button>
                </div>
        </div>
</template>


<script>
    import UsersService from "@/services/UsersService.js";

    export default {
        name: "RegistrationLayout",
        data() {
            return {
                /* success: null, */
                errors: [],
                email: null,
                password: null,
                password_check: null,
                username: null,
                role: null,  
                description: null  
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
                    this.errors.push("Les champs mot de passe et sa confirmation, ne sont pas identique");
                }
                if (!this.username) {
                    this.errors.push("Le champ de pseudonyme doit être remplis");
                }
                if (!this.role && this.role == "") {
                    this.errors.push("Un role doit être choisis");
                }
                if (!this.description) {
                    this.errors.push("Le champ de description doit être remplis");
                }
                UsersService.register({
                    email: this.email,
                    password: this.password,
                    username: this.username,
                    role: this.role,
                    description: this.description,
                }, (data) => {
                    this.errors.push(data);

                    if(data.type === "success") {
                        this.success = data.message;
                    } else {
                        this.errors.push(data.message);
                    }
                })
            }
        }
    }
</script>
