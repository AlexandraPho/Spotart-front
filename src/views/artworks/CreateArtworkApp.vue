<template>
    <div>
        <HeaderLayout/>
<<<<<<< HEAD
        <CreateArtworkLayout/>
        <UploadMediaLayout/>
=======
        <UploadMediaLayout fileTypes="image/*" @uploadComplete="getFileId" />
        <CreateArtworkLayout  v-bind:mediaId="mediaId" />
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
        <FooterLayout/>
    </div>
</template>

<script>
    import CreateArtworkLayout from '@/components/artworks/CreateArtworkLayout.vue';    
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';
<<<<<<< HEAD
    import UploadMediaLayout from "@/components/upload/UploadMediaLayout.vue";
=======
    import UploadMediaLayout from '@/components/upload/UploadMediaLayout.vue'

>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453

    export default {
        name: 'CreateArtworkApp',
        data() {
            return {
                mediaId: null
            }
        },
        components: { 
            CreateArtworkLayout,
            HeaderLayout,
<<<<<<< HEAD
            FooterLayout,
            UploadMediaLayout
=======
            UploadMediaLayout,
            FooterLayout
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
        },
        methods: {
            getFileId(event){
            console.log(' je suis dans getFileID');
            console.log(event);
            this.mediaId = event.fileID;
            },
    }
}
</script>

<style>
    .publish_title {
        display: flex;
        justify-content: center;
    }
    .publish-artwork .artwork-title,
    .succes-error-msg,
    .art-form,
    .description-artwork,
    .button-publish {
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        width: 20em;
        align-items: center;
        margin: auto;
        height: 3em;
        margin-bottom: 1em;
    }
    .publish-artwork input {
        height: 2em;
        width: 20em;
    }
</style>
