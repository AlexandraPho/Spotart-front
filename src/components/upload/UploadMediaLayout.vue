<template>

    <h1 class="publish_artwork">Publiez votre oeuvre</h1>
    <div class="artwork">
        <div class="publish-artwork-form">

            <div class="errors" v-if="errors.length">
                <p v-for="error in errors" :key="error">{{ error }}</p>
            </div>

            <div v-if="success">
                <img v-if="newFileInfo.media_type == 'image'" v-bind:src="newFileInfo.media_details.sizes.medium.source_url" />
            </div>

            <div class="field">
                <label class="field__label file-label" for="file">Choisissez un fichier</label>
                <br>
                <input class="field__input file-input" @change="upload" name="file" id="file" type="file" :accept="fileTypes">
            </div>

            <button class="add-file-button" v-on:click="uploadFile">Ajouter l'image</button>

        <!--
            <label for="title">Titre de votre fichier</label>
            <InputText :disabled="loading" name="title" id="title" placeholder="Titre du fichier" type="text" @inputChange="updateInputValue" />
        -->
        </div>
    </div>

</template>

<script>
import UploadMediasService from "@/services/UploadMediasService.js";
export default {
    name: "UploadMediaLayout",
    props: {
      fileTypes: {
        default: 'image/jpeg',
        type: String
      }
    },
    data() {
      return {
          errors: [],
          success: null,
          loading: false,
          newFileInfo: null,
          dataForm: new FormData(),
          file: File,
          fileID: null,
          //title: null
      };
    },
    methods: {
    //File info are upload in component's data when the file is selected by user
    upload: function(event){
      console.log('je suis dans la methode upload et le console log qui suit correspond a event.target.files[0] ')
      console.log(event.target.files[0]);
      this.file = event.target.files[0];
      this.dataForm.append('file', this.file);      
    },
    //calls service to add media to WP mibrary and then displays the file to the user if this is an image
    // ID of the new inserted media is sent to the parent (and can be used as a part of a form with serveral other form elements)
    uploadFile(){
      console.log('call API for upload');
      UploadMediasService.uploadMedia(this.dataForm, (data) => {
        // Checking the type of answer and display of the message
          if(data.type ==="success") {
                this.success = data.message;
                this.newFileInfo = data.newFileInfo;
                this.$emit('uploadComplete', {fileID: this.newFileInfo.id});
          } else {
            this.errors.push("Echec de l'envoi");
          }
        });
    }
  }
};
</script>

<style scoped>

    h1::after
    {
        border-top: 0.2rem solid #FFDE59;
        display: block;
        position: relative;
        top: 0.5rem;
        margin: 0 auto;
        width: 10%;
        content: "";
    }

    h1
    {
        margin-top: 50px;
        text-align: center;
        font-size: xx-large;
    }

    .publish-artwork-form
    {
        margin: 50px 350px 0 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p
    {
        text-align: center;
        font-size: x-large;
    }

    button:hover
    {
        background-color: #FAECB3;
    }
    
    .add-file-button {

        text-align: center;
        border-radius: 10px;
        background-color: #D3D3D3;
        margin: 1em;
        padding: 0.5em;
        display: inline-block;
        border: 4px #D3D3D3;
        width: 15%;
        transition: all 0.5s;
        cursor: pointer;
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
        height: auto;
        width: 1000px;
    }

    .field__input:focus
    {
        outline-color: #FFDE59;
        outline-width: 1px;
    }

    .file-input
    {
        height: auto;
        margin-top: 5px;
        padding: 10px 0 10px 10px;
    }
    
</style>