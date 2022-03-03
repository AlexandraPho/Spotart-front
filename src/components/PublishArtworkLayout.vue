<template>
  <main>
    <h1 class="publish_artwork">Publiez votre oeuvre</h1>

  <form id="app" @submit="checkForm" method="post">

    <div class="artwork">
      <label class="artwork_title">Titre de l'oeuvre :</label>
      <input v-model="artwork_title" type="text" class="artwork_champ">

    </div><br>

    <div class="artwork_pic">
      <label class="artwork_pic_title">Ajouter une photo</label><br>
      <input v-on="artwork_pic" type="file" class="artwork_pic_file"><br>
    </div><br>

  <div class="art_form">
    <label class="art_form_title">Forme d'art :</label>
      <select v-model = "selected" class="art_form_category">
        <option valeur="sculpture">Sculpture</option>
        <option valeur="paint">Peinture</option>
        <option valeur="photography">Photographie</option>
      </select>
  </div><br>

  <div class="dimension">
    <label class="dimension_title">Dimensions (en cm):</label><br>

  <div class="dimension_length">
    <label> Longeur = </label>
      <input v-model="length" type="text">

    <label> Largeur = </label>
      <input v-model="length" type="text">
    <label> Hauteur = </label>
      <input v-model="length" type="text"><br>
  </div>
   
  </div>

  
  
    <div class="description_artwok">
      <label class="description_artwork_title"> Description de l'oeuvre</label>
      <input v-model=" message" type="textarea" class="description_artwork_cadr"><br>
    </div> 
  
  <div >
    <p>
      <a v-on:click="sendForm" class="save" > Publier </a>
    </p>
  </div>
  </form>

  </main>
</template>

<script>
export default {
  name: 'PublishArtworkLayout',
 

}
</script>

<style src= "@/assets/css/publish_or_edit_your_artwork.css">

</style>

