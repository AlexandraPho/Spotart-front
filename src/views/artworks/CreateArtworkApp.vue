<template>
    <div>
        <HeaderLayout/>
        <CreateArtworkLayout/>
        <FooterLayout/>
    </div>
</template>

<script>
    import CreateArtworkLayout from '@/components/artworks/CreateArtworkLayout.vue';
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';

    export default {
        name: 'CreateArtworkApp',
        components: { 
            CreateArtworkLayout,
            HeaderLayout,
            FooterLayout
        },
    }
</script>

<style>
    .publish-artwork {
        
    }
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
