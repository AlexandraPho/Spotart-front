<template>

  <section class="oops">
    <p class="text">Je n'existe pas!</p>
  </section>

  <section class="picture">
    <img
      src="https://cdn.shopify.com/s/files/1/0255/3184/2642/articles/citation-licorne-827374_1193x.jpg?v=1574260431"
    />
  </section>
  <section class="smoke">
    <img
      class="smoke"
      src="https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios1901/lightfieldstudios190101113/114406991-m%C3%A9lange-d-%C3%A9claboussures-de-peinture-bleue-et-rose-isolated-on-white.jpg?ver=6"
    />
  </section>

  <a class="back" href="./">Retour à l'Accueil</a>
  <section class="buble">
    <img
      class="buble"
      src="https://us.123rf.com/450wm/jeremywhat/jeremywhat1202/jeremywhat120200442/12301076-pens%C3%A9e-ou-bulle-peut-%C3%AAtre-utilis%C3%A9-comme-un-espace-de-texte-ou-dans-une-bande-dessin%C3%A9e.jpg?ver=6"
    />
  </section>
  <section class="text">
    <p class="1">
      Salut Vous , qu'est ce que vous faites ici, c'est un salon imaginaire le
      404, réservé aux animaux légendaires...
    </p>
    <p class="2">
      Vous pouvez retourner à l'acceuil et Shut! si Morgan vous demande , vous
      ne m'avez pas vu
    </p>
  </section>
</template>

<script>
    export default {
        name: "FailedLayout"
    }
</script>

<style scoped>

section.picture{
   

    background-repeat: no-repeat;
}


img{
    width: 60em;
    height: 28em;
    position: relative;
    top: 5em;
}
    



img.buble {
    
    position: relative;
    right: -57em;
    top: -46em;
    width: 578px;
    transform: rotate( 
15deg
 );
}
a.back {
    position: relative;
    bottom: 180px;
    left: 15em;
    color: black;
    font-size: larger;
    -webkit-text-decoration: dashed;
    text-decoration: dashed;
    border: solid;
    font-weight: 900;
}

img.smoke {
    position: relative;
    top: -37em;
    width: 361px;
    right: -131px;
    height: 250px;
}


section.text {
    width: 301px;
    position: relative;
    left: 47%;
    bottom: 46em;
    font-size: 25px;
    font-family: cursive;
    font-weight: x-large;

}
p.text {
    text-align: center;
    text-transform: uppercase;
    font-size: 3em;
    position: relative;
    top: -10px;
    font-weight: 800;
    text-shadow: 4px 4px 4px pink;   
} 
</style>