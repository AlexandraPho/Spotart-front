<template>
  <main>
    <p v-if="success">{{ success }}</p>
    <p v-for="error in errors" :key="error">{{ error }}</p>
    <div class="artwork">
        <label class="artwork_title">Titre de l'oeuvre :</label>
    <input v-model="title" type="text" class="artwork_champ">
    </div>
    <br>
    <div class="art_form">
        <label class="art_form_title">Forme d'art :</label>
        <select v-model="artform" class="art_form_category">
            <option value="10">Sculpture</option>
            <option value="8">Peinture</option>
            <option value="9">Photographie</option>
            <option value="7">Dessin</option>
        </select>
    </div>
    <div class="description_artwok">
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
        }
    }
</script>

<style src= "@/assets/css/publish_or_edit_your_artwork.css">

</style>