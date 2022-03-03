<template>
  <h1 class="compte">Créer un compte</h1>
  <p v-for="error in errors" :key="error">{{ error }}</p>
  <p class="border-title"></p>

  <div class="container">
    <h1>Formulaire de contact</h1>
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
        <label for="prenom">Prénom</label>
        <input
          v-model="firstname"
          id="prénom"
          type="prénom"
          name="prénom"
          placeholder="Votre prénom"
        />
        <i class="fa fa-portrait"></i>
      </div>

      <div class="nom">
        <label for="nom">nom</label>
        <input
          v-model="lastname"
          id="nom"
          type="nom"
          name="nom"
          placeholder="Votre nom"
        />
        <i class="fa fa-portrait"></i>
      </div>

      <label for="pseudo">Pseudo</label>
      <div class="pseudo">
        <input
          id="pseudo"
          type="pseudo"
          name="pseudo"
          placeholder="Votre pseudo"
        />
        <i class="fa fa-smile"></i>
      </div>

      <select v-model="role">
        <option value="">--Quel est votre status--</option>
        <option value="dog">Abonnés</option>
        <option value="dog">Artiste</option>
      </select>
    </form>
  </div>

  <div class="second-container">
    <h2>Ajouter une photo</h2>

    <a href="">
      <img src="https://picsum.photos/200/300 " alt="img" />
    </a>

    <label for="story"></label>

    <textarea id="story" name="story" rows="5" cols="33">
Décrivez-vous...
Bonjour moi c'est John deboul , intermitant du spectacle , fan des red hot chili peppers , je fais des dessins quand je suis fonsdé 
</textarea
    >

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
      
      password: null,
      password_check: null,
      pseudo: null,
      role: null,
    };
  },
  methods: {
    sendForm() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email must not be empty");
      }
      if (!this.username) {
        this.errors.push("firstname must not be empty");
      }
      if (!this.pseudo) {
        this.errors.push("pseudo must not be empty");
      }
      if (!this.role) {
        this.errors.push("Role must not be empty");
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
          firstname: this.username,
        
          email: this.email,
          pseudo: this.pseudo,
          password: this.password,
          role: this.role,
        },
        (error) => {
          this.errors.push(error);
        }
      );
      // @TODO Executer une requete Asynchrone pour inscrire un nouvel utilisateur
    },
  },
};
</script>

<style  src="../assets/signup.css">
</style>

 
