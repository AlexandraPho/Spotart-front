<template>
  <header>
    <nav>
      <a class="spotart" href="/" >SPOTART</a>
      <a href class="nav-a">Sculture</a>

      <a href class="nav-a">Peinture</a>

      <a href class="nav-a">Photographie</a>

      <a href class="nav-a">Dessin</a>

      <a href class="nav-con">Connexion</a>
      <button>Partager vos création</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout",
};
</script>

<style scoped>
nav {
  display: flex;
  /* flex-flow: row; */
  justify-content: center;
  justify-content: space-around;
  background-color: black;
  position: relative;
  width: 100%;
  height: 50px;
  font-family: "Belleza";
}

h1.nav-title {
  color: white;
  font-family: Cormorant Garamond;
  font-size: xx-large;
  margin-top: 0px;
}

a.nav-a {
  padding-top: 20px;
  color: aliceblue;

  display: inline-block;
}
a.spotart{

  padding-top: 20px;
  color: aliceblue;
text-decoration: blink;
    color: grey;
    font-weight: 900;
}
button.Créer.un.Compte {
    color: black;
    background-color: #FFDE59;
    position: relative;
    right: 37%;
    height: 20px;
    top: 191px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
     border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
}


a.nav-con[data-v-10d79cc7] {
    padding-top: 17px;
    color: #ffde59;
    margin-left: -64px;
}






@media (max-width: 1468px) {
  h1.nav-title {
    text-align: center;
  }
  h1.title {
    text-align: center;
    font-family: Cormorant Garamond;
    font-size: 30px;
  }
  a.nav-a {
    display: flex;
    flex-direction: column;
  }

h1 {
    font-family: Cormorant Garamond;
    text-align: center;
    position: relative;
    bottom: -36px;
    left: 6px;
} 
a.nav-con[data-v-10d79cc7][data-v-10d79cc7] {
  padding-top: 17px;
  color: #ffde59;
  margin-left: 0px;
}

  header {
    background-color: #000000;
    display: flex;
    align-items: center;
    width: 70vw;
    max-width: 70%;
    position: relative;
    margin-left: 16%;
    /* margin-right: 25%; */
  }

  button {
    display: flex;
    flex-direction: column;
  }

  nav {
    display: flex;
    flex-direction: column;

    height: 300px;
  }

@media (max-width: 502px) {


  header {
    background-color: #000000;
    
    
  
    
  }





}


}
</style>