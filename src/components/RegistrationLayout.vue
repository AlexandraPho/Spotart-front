<template>
  <h1 class="compte">Créer un compte</h1>
  <p v-for="error in errors" :key="error">{{ error }}</p>
  <p class="border-title"></p>

  <div class="container">
    <h1>Formulaire d'inscription</h1>
    <form action="/action_page.php">
      <div class="email">
        <label for="emailAddress">Email</label>

        <input
          v-model="email"
          type="emailAddress"
          id="email"
          name="email"
          placeholder="votre adresse electronique"
        />
        <i class="fas fa-at"></i>
      </div>

      <div class="password">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="pass"
          name="password"
          placeholder="votre mot de passe"
        />
        <i class="fa fa-lock" aria-hidden="true"></i>
      </div>
      <div class="password">
        <label for="confirmation">Confirmation</label>
        <input
          v-model="password_check"
          id="confirmation"
          type="confirmation"
          name="confirmation"
          placeholder="Confirmation"
        />
        <i class="fa fa-lock" aria-hidden="true"></i>
      </div>

      <div class="prénom">
        <label for="username">Username</label>
        <input
          v-model="username"
          id="prénom"
          type="prénom"
          name="prénom"
          placeholder="Votre prénom"
        />
        <i class="fa fa-portrait"></i>
      </div>

      <label for="pseudo">Pseudo</label>
      <div class="pseudo">
        <input
          v-model="pseudo"
          id="pseudo"
          type="pseudo"
          name="pseudo"
          placeholder="Votre pseudo"
        />
        <i class="fa fa-smile"></i>
      </div>

      <div class="role">
        <label class="chose">Choisissez votre profile</label>
        <select v-model="role">
          <option value="subscriber">Abonné / Abonnée</option>
          <option value="artist">Artist</option>
        </select>
      </div>
    </form>
  </div>

  <div class="container2">
    <div id="app">
      <div v-if="!illustration">
        <h2>Choisir une photo</h2>
        <input type="file" @change="onFileChange" />
      </div>
      <div v-else>
       <img :src="illustration" >
        <button @click="removeIllustration">Remove image</button>
      </div>
    </div>

    <div class="field">
      <textarea
        v-model="content"
        class="field_input"
        placeholder="Description"
      ></textarea>
    </div>

    <button v-on:click="sendForm" class="Créer un Compte" type="button">
      Créer un compte
    </button>
  </div>
</template>


<script>
import UsersService from "@/services/UsersService.js";
export default {
  name: "RegistrationLayout",
  data() {
    return {
      errors: [],
      email: null,
      username: null,
      role: null,
      password: null,
      password_check: null,
      pseudo: null,
      //illustration: null,
      content: null,
    };
  },
  methods: {
    sendForm() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email must not be empty");
      }
      if (!this.username) {
        this.errors.push("username must not be empty");
      }
      if (!this.pseudo) {
        this.errors.push("pseudo must not be empty");
      }
      if (!this.role) {
        this.errors.push("role must not be empty");
      }
      // if (!this.illustration) {
      // this.errors.push("Illustration must not be empty");
      // }
      if (!this.content) {
        this.errors.push("content must not be empty");
      }

      if (!this.password || !this.password_check) {
        this.errors.push("Password and Password_check must be filled");
      } else {
        if (this.password !== this.password_check) {
          this.errors.push("Password and Password_check must be the same");
        }
      }
      UsersService.register(
        {
          username: this.username,

          email: this.email,
          pseudo: this.pseudo,
          password: this.password,
          role: this.role,
          //illustration: this.illustration,
        },
        (error) => {
          this.errors.push(error);
        }
      );

      UsersService.create(
        {
          content: this.content,
        },
        () => {
          // Affichage erreurs / succés
          // Redirection vers la liste des recettes
          this.$router.push("/");
        }
      );
    },
  },
};
</script>

<style  src="../assets/signup.css">
</style>

 
 