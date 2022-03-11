<template>
  <main>
    <h1 class="publish_artwork">Publiez votre oeuvre</h1>
    <p v-if="success">{{ success }}</p>
    <p v-for="error in errors" :key="error">{{ error }}</p>
      
    <div class="artwork">
        <label class="artwork_title">Titre de l'oeuvre :</label>
    <input v-model="title" type="text" class="artwork_champ">

    </div>
    <br>

    <!-- <div class="artwork_pic">
      <label class="artwork_pic_title">Ajouter une photo</label><br>
      <input type="file" class="artwork_pic_file"><br>
    </div><br> -->

    <div class="art_form">
        <label class="art_form_title">Forme d'art :</label>
        <select v-model="artforms" class="art_form_category">
            <option value="sculp">Sculpture</option>
            <option value="paint">Peinture</option>
            <option value="photo">Photographie</option>
            <option value="draw">Dessin</option>
        </select>
    </div>
    <br>
<!-- 
  <div class="dimension">
    <label class="dimension_title">Dimensions (en cm):</label><br>

  <div class="dimension_length
    <label> Longueur = </label>
      <input v-model="longueur" type="number">

    <label> Largeur = </label>
      <input v-model="largeur" type="number">
    <label> Hauteur = </label>
      <input v-model="hauteur" type="number"><br>
  </div>
   
  </div> -->

    <div class="description_artwok">
        <label class="description_artwork_title"> Description de l'oeuvre</label>
        <input v-model="content" type="textarea" class="description_artwork_cadr"><br>
    </div> 
  
    <div >
        <button v-on:click="CreatePost" class="save" > Publier </button>
    </div>
  
    </main>
</template>

<script>
    import ArtworksService from '@/services/ArtworksService.js';

    export default {
        name: 'CreateArtworkLayout',
        data() {
            return {
                success: null,
                errors: [],
                title: null,
                artforms: null,
                content: null,
                status: "publish",
                author: this.$store.state.userID,
            }
        },
        methods: {
            CreatePost() {
                this.errors = [];
                if(!this.title) {
                    this.errors.push("Title must not be empty");
                }
                if(!this.artforms) {
                    this.errors.push("Category must not be empty");
                }
                if(!this.content) {
                    this.errors.push("Content must not be empty");
                }
                ArtworksService.CreatePost({
                    title: this.title,
                    artforms: this.artforms,
                    content: this.content,
                    status: this.status,
                }, (data) => {
                    this.errors.push(data);

                    if(data.type === "success") {
                        this.success = data.message;
                    } else {
                        this.errors.push(data.message);
                    }
                })
            }
        }
    }
</script>

<style src= "@/assets/css/publish_or_edit_your_artwork.css">

</style>