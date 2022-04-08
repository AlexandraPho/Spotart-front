<template>
    <div>
        <HeaderLayout/>
        <h1 class="publish_artwork">Votre biographie</h1>
        <UploadMediaLayout fileTypes="image/*" @uploadComplete="getFileId"/>
        <RegistrationArtistLayout v-bind:mediaId="mediaId" />
        <FooterLayout/>
    </div>
</template>

<script>
    import RegistrationArtistLayout from '@/components/user/RegistrationArtistLayout.vue';    
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';
    import UploadMediaLayout from '@/components/upload/UploadMediaLayout.vue'
    export default {
        name: 'RegistrationArtistApp',
        data() {
            return {
                mediaId: null
            }
        },
        components: { 
            RegistrationArtistLayout,
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