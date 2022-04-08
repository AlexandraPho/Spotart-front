<template>

    <div class="update-artwork-form">
        <h1 class="publish_artwork">Modifier votre oeuvre</h1>

        <p v-if="success">{{ success }}</p>
        <p v-for="error in errors" :key="error">{{ error }}</p>

        <div class="field">
            <label class="field__label">Titre de l'oeuvre :</label>
            <input class="field__input" type ="text">
        </div>

        <br>

        <div class="field">
            <label class="field__label">Ajouter une photo</label><br>
            <input type="file" class="field__input" name="file"><br>
        </div>

        <br>

        <div class="field">
            <label class="field__label">Choisissez la forme d'art</label>
            <select v-model="artform">
                <option v-for="artform in artforms" :key="artform.name" :value="artform.id" v-html="artform.name"></option>
            </select>
        </div>

        <br>
 
        <div class="field">
            <label class="field__label"> Description de l'oeuvre</label>
            <textarea v-model="content" type="textarea" class="textarea"></textarea>
        </div>

        <br>

        <button  class="save-button" href="#"> Sauvegarder les changements </button>
        <button  class ="delete-button" href="#"> Supprimer l'oeuvre </button>
    </div>

</template>

<script>

    //import ArtworksService from '@/services/ArtworksService.js';
    //import ArtformsService from '@/services/ArtFormsService.js';

    export default {
        name: 'UpdateArtworkLayout',
        data() {
            return {
                success: null,
                errors: [],
                title: null,
                artforms: [],
                artform: null,
                content: null,
                status: "publish",
                author: this.$store.state.userID
            }
        },
    }

</script>

<style scoped>

    .update-artwork-form
    {
        margin: 10px 350px 0 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p
    {
        text-align: center;
        font-size: x-large;
    }

    .field__label
    {
        text-align: left;
        font-size: x-large;
        margin-bottom: 5px
    }

    .field__input
    {
        border: 1px solid rgb(184, 182, 182);
        border-radius: 0.5rem;
        background-color: #F0F4EE;
        margin-bottom: 0.5rem;
        background-color: #D3D3D3;
        padding: 0 10px 0 10px;
        font-size: x-large;
        height: 40px;
        width: 1000px;
    }

    .field__input:focus
    {
        outline-color: #FFDE59;
        outline-width: 1px;
    }

    .textarea
    {
        border: 1px solid rgb(184, 182, 182);
        border-radius: 0.5rem;
        background-color: #F0F4EE;
        margin-bottom: 0.5rem;
        background-color: #D3D3D3;
        padding: 0 10px 0 10px;
        font-size: x-large;
        height: 200px;
        width: 1000px;
    }

    .field
    {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 30px 350px 0 350px;
    }

    .save-button,
    .delete-button
    {
        text-align: center;
        border-radius: 10px;
        background-color: #FFDE59;
        margin: 1em;
        padding: 0.5em;
        display: inline-block;
        border: 4px #CCCCCC;
        width: 20%;
        transition: all 0.5s;
        cursor: pointer;
        font-size: x-large;
    }

    button:hover
    {
        background-color: #FAECB3;
    }

</style>