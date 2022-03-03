<template>
    <div class="artist-detail-container">
        <h1 class="title">{{ title }}</h1>
         <p class="border-artist"></p>
        <p class="text" v-html="content"></p>
        <h2 class="title2">{{ title }}</h2>
 <section class="artist">
        <img src="https://images.assetsdelivery.com/compings_v2/martinedf/martinedf1701/martinedf170100148.jpg" alt="img-artist">
   </section>
   <div class="media_details" v-bind:style="'background-image:url(' + image + ')'"></div>
    </div>
</template>





<script>
export default {
    name: 'ArtistDetailLayout',
    props: {
        title: String,
        content: String,
        image: String,
        id: Number
    }
}
</script>

<style  src="../assets/artist-profile.css">
</style>
