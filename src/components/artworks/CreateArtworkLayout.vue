<template>
    <div class="publish-artwork">
        <h1 class="publish_title">Publiez votre oeuvre</h1>
        <div class="succes-error-msg">
            <p v-if="success">{{ success }}</p>
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <div class="artwork-title">
            <label class="artwork_title">Titre de votre oeuvre :</label>
            <input class="artwork_champ" v-model="title" type="text" >
        </div>
        <!-- <div class="artwork_pic">
        <label class="artwork_pic_title">Ajouter une photo</label><br>
        <input type="file" class="artwork_pic_file"><br>
        </div><br> -->
        <div class="art-form">
            <label class="art_form_category">Quelle est la catégorie de votre oeuvre :</label>
            <select class="art_form_category" v-model="artforms" >
                <option value="sculp">Sculpture</option>
                <option value="paint">Peinture</option>
                <option value="photo">Photographie</option>
                <option value="draw">Dessin</option>
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
        <div class="description-artwork">
            <label class="description_artwork_title"> Description de l'oeuvre</label>
            <input class="description_artwork_text" v-model="content" type="textarea" ><br>
        </div> 
        <div class="button-publish">
            <button class="publish" v-on:click="CreatePost"> Publier </button>
        </div>
    </div>
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
                //if image upload
                ArtworksService.CreatePost({
                    title: this.title,
                    artforms: this.artforms,
                    content: this.content,
                    status: this.status,
                    featured_media: this.formData
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