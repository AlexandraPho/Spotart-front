<template>
  <main>
  <h1 class="publish_artwork">Publiez votre oeuvre</h1>
      <div class="artwork">
          <div class="errors" v-if="errors.length > 0">
            <p v-for="error in errors" :key="error">{{ error }}</p>
          </div>
          <div v-if="success">
            <img v-if="newFileInfo.media_type == 'image'" v-bind:src="newFileInfo.media_details.sizes.medium.source_url" />
          </div>
          <div>
          <div class="cheat">
            <label class="artwork_title" for="file">Choisissez un fichier</label>
            <input @change="upload" name="file" id="file" placeholder="choisissez l'image de votre oeuvre..." type="file" :accept="fileTypes">
        <!--
            <label for="title">Titre de votre fichier</label>
            <InputText :disabled="loading" name="title" id="title" placeholder="Titre du fichier" type="text" @inputChange="updateInputValue" />
        -->
        </div>
      <div class="center-button">
      <button class="favorite styled" v-on:click="uploadFile">Ajouter l'image</button>
      </div>
      </div>
    </div>
  </main>
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
            this.errors.push(data.message);
          }
        });
    }
  }
};
</script>