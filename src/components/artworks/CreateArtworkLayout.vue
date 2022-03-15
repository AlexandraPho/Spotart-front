<template>
 
  <main>
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

<!--     <div class="art_form">
        <label class="art_form_title">Forme d'art :</label>
        <select v-model="artforms" class="art_form_category">
            <option v-for="artform in artforms" :key="artform.name" :value="artform.id" v-html="artform.name"></option>
        </select>
    </div> -->
    
    <div class="art_form">
        <label class="art_form_title">Forme d'art :</label>
        <select v-model="artforms" class="art_form_category">
            <option value="2">Dessin</option>
            <option value="3">Photographie</option>
            <option value="4">Peinture</option>
            <option value="5">Sculpture</option>
        </select>
    </div>

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

    <div class="description_artwork">
        <label class="description_artwork_title"> Description de l'oeuvre</label>
        <input v-model="content" type="textarea" class="description_artwork_cadr"><br>
    </div> 
    <div>
        <button v-on:click="CreatePost"> Publier </button>
    </div>
  
    </main>
</template>

<script>
    import ArtworksService from '@/services/ArtworksService.js';
    import ArtformsService from '@/services/ArtFormsService.js';

    export default {
        name: 'CreateArtworkLayout',
        props: {
            mediaId: Number,
        },
        data() {
            return {
                success: null,
                errors: [],
                title: null,
                artform: [],
                content: null,
                status: "publish",
                author: this.$store.state.userID
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
                if(!this.mediaId) {
                    this.errors.push("Merci d'ajouter une image");
                }
                ArtworksService.CreatePost({
                    title: this.title,
                    artform: [this.artform],
                    content: this.content,
                    status: this.status,
                    featured_media: this.mediaId,
                    author: this.author
                }, (data) => {
                    this.errors.push(data);

                    if(data.type === "success") {
                        this.success = data.message;
                    } else {
                        this.errors.push(data.message);
                    }
                })
            }
        },
        mounted() {
            ArtformsService.findAll().then(
                (response) => {
                    console.log('Artforms Options', response.data);
                    this.artforms = response.data;
                }
            );
        }
    }

</script>

