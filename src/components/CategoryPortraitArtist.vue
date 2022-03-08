<template>
    <div class="artist-portrait">
        <img class="round-portrait" src="https://picsum.photos/seed/picsum/200/300" alt="portrait">
        <p>{{title}}</p>
        <button class="follow" @click='goToArtistProfil()'>Voir le profil</button>
    </div>
</template>

<script>
    export default {
        name: 'CategoryPortraitArtist',
        props: {
        title: String,
        image: String
        },
        data() {
            return {
                artists: []
            }
        },
        methods:{
            goToArtistProfil(){
                this.$router.push('/artist/:id'); 
            }
        }
    }
</script>

<style scoped>
    /*ARTISTS and ARTWORKS section*/
    /*.artist-artwork {
        display: flex;
        justify-content: space-around;
        margin: 1.5em 0em 0.2em 0em;
    }*/
    .artist-portrait {
        flex-direction: column;
        margin: 1em;
        margin-bottom: 2em;
        margin-left: 6em;
    }
    .artist-portrait .round-portrait {
        border-radius: 100%;
        -webkit-border-radius: 9.375em;
        width: 9em;
        height: 9em;
        margin-bottom: 0.2em;
    }
    .artist-portrait p {
        font-size: 1.5em;
        margin: 0.3em 0.3em 0.5em 0.9em;
    }
    .artist-portrait button {
        width: 7em;
        height: 1.8em;
        color: black;
        background-color: #FFDE59;
        border: none;
        border-radius: 0.3em;
        margin-left: 1.2em;
        font-size: 1.2em;
    }
</style>