<template>
  <h1 class="title">Créer un compte</h1>
  <!-- <p v-if="success">{{ success }}</p> -->
  <p v-for="error in errors" :key="error">{{ error }}</p>

  <div class="container-form1">
    <div class="container">
      <form>
        <div class="email">
          <label for="email">Adresse email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="robert@gmail.com"
          />
          <i class="fas fa-at"></i>
        </div>

        <div class="password">
          <label for="password">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />
          <i class="fa fa-lock" aria-hidden="true"></i>
        </div>

        <div class="password">
          <label for="password-confirmation"
            >Confirmation du mot de passe</label
          >
          <input
            v-model="password_check"
            id="password-confirmation"
            type="password"
            name="password-confirmation"
            placeholder="Confirmer votre mot de passe"
          />
          <i class="fa fa-lock" aria-hidden="true"></i>
        </div>

        <div class="pseudo">
          <label for="username">Pseudonyme</label>
          <input
            v-model="username"
            id="username"
            type="username"
            name="username"
            placeholder="Pseudonyme"
          />
          <i class="fa fa-portrait"></i>
        </div>
        <div class="container2">
          <!--                 <div id="app">
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
            <textarea
              v-model="description"
              class="field_input"
              placeholder="Biographie"
            ></textarea>
          </div>
        </div>
        <div class="role">
          <label class="chose">Choisissez votre type de profil</label>
          <select v-model="role">
            <option value="subscriber">Abonné / Abonnée</option>
            <option value="artist">Artist</option>
          </select>
        </div>
        <div class="send-button">
          <button v-on:click="sendForm" class="create-account" type="button">
            Créer un compte
          </button>
        </div>
        <br /><br />
      </form>
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
      description: null,
    };
  },
  methods: {
    sendForm() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Le champ d'adresse email doit être remplis");
      }
      if (!this.password || !this.password_check) {
        this.errors.push(
          "Le(s) champ(s) mot de passe et/ou sa confirmation doivent être remplis"
        );
      }
      if (this.password !== this.password_check) {
        this.errors.push(
          "Les champs mot de passe et sa confirmation, ne sont pas identique"
        );
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
      UsersService.register(
        {
          email: this.email,
          password: this.password,
          username: this.username,
          role: this.role,
          description: this.description,
        },
        (data) => {
          this.errors.push(data);

          if (data.type === "success") {
            this.success = data.message;
          } else {
            this.errors.push(data.message);
          }
        }
      );
    },
  },
};
</script>


<style>
h1 {
  font-family: Cormorant Garamond;
  text-align: center;
  position: relative;
  bottom: 18px;
}

.title {
  margin: 20px 0 0 0;
}

.email {
  width: 90%;
}

.password {
  width: 90%;
}

.pseudo {
  width: 90%;
}

.role {
  width: 90%;
}

.field {
  width: 90%;
}

input {
  font-size: large;
}

input[type="text"],
textarea,
input[type="email"] {
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 39px;
  resize: vertical;
}

label {
  width: 90%;
  display: block;
  font: 1rem "Fira Sans", sans-serif;
  position: relative;
  left: 350px;
}

input[type="submit"] {
  background-color: #1255a2;
  color: white;
  padding: 12px 20px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #1872d9;
}

.container-form1 {
  display: flex;
  justify-content: center;
}

.second-container {
  width: 50%;
  /*     float: right;
    position: relative;
    float: 15%;
    left: 47%; */
  bottom: 465px;
}

input[type="file"] {
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  width: 105px;
  height: 107px;
  background-color: #ffde59;
}

textarea#story {
  left: 14px;
}

h1 {
  font-family: Cormorant Garamond;
  text-align: center;
}
h2 {
  text-align: center;
  font-family: Cormorant Garamond;
  font-size: 26px;
}

input#email {
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 39px;
  resize: vertical;
}

input#password {
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 39px;
  resize: vertical;
}

input#password-confirmation {
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 39px;
  resize: vertical;
}

input#username {
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 39px;
  resize: vertical;
}

select {
  position: relative;
  left: 41px;
  border: solid;
}
.container2 {
  width: 100%;
  display: flex;
}

.container2 .field {
  width: 90%;
}

label {
  width: 90%;
  display: block;
  font: 1rem "Fira Sans", sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}

.send-button {
  width: 90%;
  display: flex;
  justify-content: center;
  position: relative;
  left: 42px;
}

.container {
  width: 50%;
  border: solid 2px;
  position: relative;
  right: 5p;
  top: -22px;
  background-color: #ffe990;
}
button.create-account {
   
    border-color: #ffde59;
    font-size: x-large;
    width: 250px;
    height: 50px;
    cursor: pointer;
    background-color: black;
    color: #ffde59;
}
</style>