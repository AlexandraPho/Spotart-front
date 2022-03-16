<template>

      <div>
    <section>
      <h1 class="connexion">Connexion</h1>
      <hr class="hr-login">
      <p v-if="success">{{ success }}</p>
      <p v-for="error in errors" :key="error">{{ error }}</p>
      <div>
        <label for="username" class="username">Pseudo :</label>
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
      <router-link :to="{name: 'Registration'}"><button class="send-signup">Inscription</button></router-link>
      <br><br>

      <br /><br />
    </section>
  </div>
    <br>
    
    <br>
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
                        console.log('Users', data);
                        if(data.type === "success") {
                            this.success = data.message;
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

.hr-login
{
  position: relative;
  top: -245px;
  left: -14px;
}

input#username {
  position: relative;
  left: 114px;
  bottom: 50px;
  width: 56%;
  height: 35px;
  border: solid 1px;
  border-radius: 5px;
  font-size: large;
}
input#password {
  position: relative;
  left: 55px;
  width: 56%;
  height: 35px;
  border: solid 1px;
  bottom: -33px;
  border-radius: 5px;
  font-size: large;
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

label.username {
  position: relative;
  left: 8em;
  bottom: 90px;
  font-size: x-large;
}

label.pw {
  position: relative;
  bottom: 10px;
  left: 193px;
  font-size: x-large;
}
button.send {
  position: relative;
  left: 195px;
  height: 30px;
  border-radius: 5px;
  color: #ffde59;
  background-color: black;
  top: 54px;
  font-size: x-large;
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
  border-radius: 10px;
}
h1.connexion {
  text-align: center;
  position: relative;
  bottom: 224px;
  left: -15px;
  font-size: 2em;
}

button.send-signup {
  position: relative;
  left: 420px;
  height: 30px;
  border-radius: 5px;
  color: #ffde59;
  background-color: black;
  top: 54px;
  font-size: x-large;
}

</style>