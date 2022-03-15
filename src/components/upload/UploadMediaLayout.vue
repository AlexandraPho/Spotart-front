<template>
<<<<<<< HEAD
  <div>
    
    <div class="row">
      <div  class="col-8">
        <label for="file" class="btn btn-default p-0">Choisissez un fichier

          <!-- bouton de selection du fichier -->
          <input 
          :disabled="loading" 
          @change="upload($event)" 
          name="file" id="file" 
          placeholder="choose a file..." 
          type="file" 
          accept="fileTypes"  
          class="container_inputText-content"/> <!--  ref="file" -->   

        </label>
      </div>

      <div class="col-4">

        <!-- bouton de téléchargement du ficher -->
        <button 
        class="btn btn-success btn-sm float-right" 
        :disabled="currentImage" 
        @click="upload" > Upload 
        </button>

        </div>
    </div>
    <!-- barre de téléchargement  -->
    <div v-if="currentImage" class="progress">

      <div 
      class="progress-bar progress-bar-info" 
      role="progressbar"  
      :aria-valuenow="progress" 
      aria-valuemin="0"  
      aria-valuemax="100"  
      :style="{ width: progress + '%' }" >
        {{ progress }}%
      </div>

    </div>
    <!-- permet de visualiser l'image téléchargée -->
    <div v-if="previewImage">
      <div>
        <img class="preview my-3" :src="previewImage" alt="" />
      </div>
    </div>

    <div v-if="message" class="alert alert-secondary" role="alert">
      {{ message }}
    </div>

    <div class="card mt-3">
      <div class="card-header">List of Images</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(image, index) in imageInfos"
          :key="index"
        >
          <a :href="image.url">{{ image.name }}</a>
        </li>
      </ul>

    </div>
  </div>
=======
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
</main>
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
</template>


<script>
import UploadMediasService from "@/services/UploadMediasService.js";

export default {
    name: "UploadMediaLayout",
<<<<<<< HEAD
    data() {
      return {
        currentImage: undefined,
        previewImage: undefined,
        progress: 0,
        message: "",
        imageInfos: [],
      };
    },
    methods: {
      selectImage() {
        this.currentImage = this.$refs.file.files.item(0);
        this.previewImage = URL.createObjectURL(this.currentImage);
        this.progress = 0;
        this.message = "";
      },
      upload() {
        this.progress = 0;
        UploadMediasService.upload(this.currentImage, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        })
          .then((response) => {
            this.message = response.data.message;
            return UploadMediasService.getFiles();
          })
          .then((images) => {
            this.imageInfos = images.data;
          })
          .catch((err) => {
            this.progress = 0;
            this.message = "Could not upload the image! " + err;
            this.currentImage = undefined;
          });
      },
    },
    mounted() {
      UploadMediasService.getFiles().then(response => {
        this.imageInfos= response.data;
      });
    }
};


</script>

<style>

</style>
=======
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
      console.log('je suis dans la methode upload et le console log qui suit coorespond a event.target.files[0] ')
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
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
