<template>
   <main>
    <h1 class="publish_artwork">Modifier votre oeuvre</h1>
   
      <div class="artwork">
      <label class="artwork_title">Titre de l'oeuvre :</label>
      <input v-model="title" class="artwork_champ" type ="text">

    </div><br>


    <!-- <div class="artwork_pic">
      <label class="artwork_pic_title">Ajouter une photo</label><br>
      <input v-model= "pic" type="file" class="artwork_pic_file" name="file"><br>
    </div><br> -->

  <div class="art_form">
    <label class="art_form_title">Forme d'art :</label>
     <select v-model="artform" class="art_form_category">
        <option valeur="sculpture">Sculpture</option>
        <option valeur="paint">Peinture</option>
        <option valeur="photography">Photographie</option>
      </select>
  </div><br>

   
  
  <div class="description_artwok">
      <label class="description_artwork_title"> Description de l'oeuvre</label>
      <input v-model="content" type="textarea" class="description_artwork_cadr"><br>
  </div>

  <div >
    <p>
      <button v-on:click="save" class="save" href="#"> Sauvegarder les changements </button>
    </p>
  </div>

  <!-- <div>
    <p>
      <button v-on:click="sup" class ="delete" href="#"> Supprimer l'oeuvre </button>
    </p>
  </div> -->
  

  </main>
</template>

<script>
export default {
  name: 'UpdateArtworkLayout',
  data: function () {
     console.log ('je suis ici');
    return {
      title: null,
      artform : null,
      content: null,
      status:"update",
      sup:"delete",

     
    }
  }
}
</script>



<style src= "@/assets/css/publish_or_edit_your_artwork.css">

.delete {
  
}
</style>