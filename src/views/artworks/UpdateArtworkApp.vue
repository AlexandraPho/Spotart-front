<template>
    <div>
        <HeaderLayout/>
        <UpdateArtworkLayout/>
        <FooterLayout/>
    </div>
</template>

<script>
    import UpdateArtworkLayout from '@/components/artworks/UpdateArtworkLayout.vue'
    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'

    export default {
        name: 'UpdateArtworkApp',
        components: { 
            UpdateArtworkLayout,
            HeaderLayout,
            FooterLayout
        },

    }
</script>

