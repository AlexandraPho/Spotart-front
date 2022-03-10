<template>
    <div>
        <HeaderLayout />
  <div class="home">
    <h1>Don't Be afraid It's coming soon</h1>
  </div>
        <HomeTitle />
        <GalleryLayoutTitle v-bind:categoryId="PeintureID" v-bind:category="NameCatPeinture" />
<br>
        <GalleryLayoutTitle v-bind:categoryId="SculptureID" v-bind:category="NameCatSculpture" />
        <FooterLayout />
    </div>
</template>

<script>
    import HeaderLayout from '@/components/HeaderLayout.vue';
    import FooterLayout from '@/components/FooterLayout.vue';
    import HomeTitle from '@/components/Home_Aude/HomeTitle.vue';
    import GalleryLayoutTitle from '@/components/SingleArtwork/GalleryLayoutTitle.vue';

    export default {
        name: 'HomeApp',
        components: {
            HeaderLayout,
            FooterLayout,
            HomeTitle,
            GalleryLayoutTitle
        },
      data() {
      return {
        PeintureID: 3,
        NameCatPeinture: 'Peinture',
        SculptureID: 5,
        NameCatSculpture: 'Sculpture'
        }
    },
    }
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 120px;
  font-weight: 900;
  color: black;
}
</style>
