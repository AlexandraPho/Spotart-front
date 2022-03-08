<template>
    <div class="artist-detail-container">
        <h1 class="title">{{ title }}</h1>
         <p class="border-artist"></p>
        <p class="text" v-html="content"></p>
           <h2 class="title2">{{ title2 }}</h2>
     <div class="media-details" v-bind:style="'background-image:url(' + image + ')'"></div>
 <section class="artist">
   </section>
  
    </div>
</template>


<script>
export default {
    name: 'ArtistDetailLayout',
    props: {
        title: String,
    title2: String,
        content: String,
        image: String,
        id: Number
    }
}
</script>

<style  src="../assets/artist-profile.css">
</style>
