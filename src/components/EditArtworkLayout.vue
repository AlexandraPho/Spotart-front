<template>
   <main>
    <h1 class="publish_artwork">Modifier votre oeuvre</h1>

   <form id="app" @submit="checkForm" method="post">

    <div class="artwork">
      <label class="artwork_title">Titre de l'oeuvre :</label>
      <input class="artwork_champ" type ="text">

    </div><br>


    <div class="artwork_pic">
      <label class="artwork_pic_title">Ajouter une photo</label><br>
      <input type="file" class="artwork_pic_file" name="file"><br>
    </div><br>

  <div class="art_form">
    <label class="art_form_title">Forme d'art :</label>
      <select class="art_form_category">
        <option valeur="sculpture">Sculpture</option>
        <option valeur="paint">Peinture</option>
        <option valeur="photography">Photographie</option>
      </select>
  </div><br>

  <div class="dimension">
    <label class="dimension_title">Dimensions (en cm):</label><br>

  <div class="dimension_length">
    <label> Longeur = </label>
      <input type ="text">
    <label> Largeur = </label>
      <input type="text">
    <label> Hauteur = </label>
      <input type="text"><br>
  </div>
   
  </div>

  
  <div class="description_artwok">
      <label class="description_artwork_title"> Description de l'oeuvre</label>
      <input type="text" class="description_artwork_cadr"><br>
  </div>

  <div >
    <p>
      <a class="save" href="#"> Saugarder les changements </a>
    </p>
  </div>

  <div>
    <p>
      <a class ="delete" href="#"> Supprimer l'oeuvre</a>
    </p>
  </div>
  </form>

  </main>
</template>

<script>
export default {
  name: 'EditArtworkLayout',
  

}
</script>

<style src= "@/assets/css/publish_or_edit_your_artwork.css">

</style>