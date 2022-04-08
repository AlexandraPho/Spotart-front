<template>
    <div>
        <HeaderCopy/>
        <UpdateArtworkLayout/>
        <FooterLayout/>
    </div>
</template>

<script>
    import UpdateArtworkLayout from '@/components/artworks/UpdateArtworkLayout.vue'
    import HeaderCopy from '@/components/template/HeaderCopy.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'

    export default {
        name: 'UpdateArtworkApp',
        components: { 
            UpdateArtworkLayout,
            HeaderCopy,
            FooterLayout
        },

    }
</script>

