<template>
    <div>
        <HeaderLayout/>
        <UploadMediaLayout fileTypes="image/*" @uploadComplete="getFileId" />
        <CreateArtworkLayout  v-bind:mediaId="mediaId" />
        <FooterLayout/>
    </div>
</template>

<script>
    import CreateArtworkLayout from '@/components/artworks/CreateArtworkLayout.vue';    
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';
    import UploadMediaLayout from '@/components/upload/UploadMediaLayout.vue'


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
            UploadMediaLayout,
            FooterLayout
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

