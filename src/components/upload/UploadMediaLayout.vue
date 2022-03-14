<template>
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
        :disabled="!currentImage" 
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
</template>


<script>
import UploadMediasService from "@/services/UploadMediasService.js";

export default {
    name: "UploadMediaLayout",
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