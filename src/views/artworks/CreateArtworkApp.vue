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

