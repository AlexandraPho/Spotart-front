<template>
  <div>
    <section>
      <h1 class="connexion">Connexion</h1>
      <p v-if="success">{{ success }}</p>
      <p v-for="error in errors" :key="error">{{ error }}</p>
      <div>
        <label for="username">Pseudo :</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Pseudo"
          v-model="username"
        />
      </div>

      <div>
        <label class="pw" for="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe"
          v-model="password"
        />
      </div>

      <button class="send" v-on:click="sendForm">Se connecter</button>
      <br /><br />

      <br /><br />
    </section>
  </div>

  <!-- 
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
 -->
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  name: "LoginLayout",
  data() {
    return {
      success: null,
      errors: [],
      username: null,
      password: null,
    };
  },
  methods: {
    sendForm() {
      this.errors = [];
      if (!this.username) {
        this.errors.push("Username must not be empty");
      }
      if (!this.password) {
        this.errors.push("Password must not be empty");
      }
      if (this.errors.length === 0) {
        // On execute une requete pour recuperer un token
        // The second argument is a callback
        // that wil be exexuted from the connect() context
        UsersService.connect(
          {
            username: this.username,
            password: this.password,
          },
          (data) => {
            console.log("Users", data);
            // Je verifie le type de réponse et j'affiche
            // le message en consequence
            if (data.type === "success") {
              this.success = data.message;
            } else {
              // Add the error msg to our tpl
              this.errors.push(data.message);
            }
          }
        );
      }
    },
  },
};

/* import UsersService from '@/services/UsersService.js';

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
} */
</script>


<style >
input#username {
  position: relative;
  left: 52px;
  width: 56%;
  height: 30px;
  border: solid 1px;
}
input#password {
  position: relative;
  left: 14px;
  width: 56%;
  height: 30px;
  border: solid 1px;
  bottom: -33px;
}
p {
  position: relative;
  left: 58em;
  bottom: 10px;
}
label {
  position: relative;
  left: 13em;
  bottom: 25px;
  font-weight: 600;
}
label.pw {
  position: relative;
  bottom: -4px;
  left: 193px;
}
button.send {
  position: relative;
  left: 12rem;
  height: 30px;
  border-radius: 5px;
  color: #ffde59;
  background-color: black;
  top: 54px;
}

a.compte {
  position: relative;
  left: 56em;
  font-size: 14px;
  color: black;
}

section {
  padding-bottom: 16%;
  margin-top: 12%;
  padding: 85px;
  border: solid;
  margin-left: 30%;
  margin-right: 30%;
  height: 15p;
  position: relative;
  top: -50px;
  background-color: #ffe990;
}

h1.connexion {
  text-align: center;
  position: relative;
  bottom: 224px;
  left: -15px;
  font-size: 2em;
}
</style>















