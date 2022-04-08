<template>
    <div class="container-form">
        <div class="container">

            <form class="publish-artwork-form">

                <p v-if="success">{{ success }}</p>
                <p v-for="error in errors" :key="error">{{ error }}</p>

                <div class="field">
                    <label class="field__label" placeholder="elle sera visible par les visiteurs du site">Votre biographie</label>
                    <input v-model="content" type="textarea" class="field__input"><br>
                </div>
                <button class="post-button" v-on:click="createPostArtist">Envoyer votre biographie et votre oeuvre</button>
                <br><br><br>
            </form>
        </div>
    </div>

</template>

<script>
import ArtistsService from '@/services/ArtistsService.js';
import UsersService from '@/services/UsersService';
export default {
    name: 'RegistrationArtistLayout',
    props: {
        mediaId: Number
    },
    data() {
        return {
            success: null,
            errors: [],
            title: null,
            content: null,
            artistId: null,
            userID:this.$store.state.userID
        }
    },
    mounted() {
    UsersService.getUserbyId(this.$store.state.userID).then(
        (response) => {
            console.log('User informations', response);
            console.log('this.title', response.data.nickname);
            this.title = response.data.nickname;
        }
    );
    UsersService.getIDArtistWithUserId(this.userID).then(
        (response) => {
            console.log('Table custom', response);
            console.log('this.artistId', response.data[0].post_id);
            this.artistId = response.data[0].post_id;
        }
    );
    },
    methods: {
        createPostArtist: function(e){
            e.preventDefault();
            this.errors = [];
            if(!this.content) {
                this.errors.push("Merci de remplir votre biographie");
            }
            if(!this.mediaId) {
                this.errors.push("Vous devez choisir une image");
            }
            if(this.title && this.artistId){
                console.log("dans le if this.title et this.artistId on est avt le service create du composant Registration layout")
            ArtistsService.createPostArtist(
                this.artistId,
                {title:this.title,
                content: this.content,
                featured_media: this.mediaId 
            }, (data) => {
                if(data.type === "success") {
                    this.success = "Votre profil a été complété avec succés !";
                } else {
                    this.errors.push(data.message);
                }
            })}
        }
    }
}
</script>

<style scoped>
    .publish-artwork-form
    {
        margin: 50px 350px 0 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p
    {
        text-align: center;
        font-size: x-large;
    }
    h1::after
    {
        border-top: 0.2rem solid #FFDE59;
        display: block;
        position: relative;
        top: 0.5rem;
        margin: 0 auto;
        width: 10%;
        content: "";
    }
    h1
    {
        margin-top: 50px;
        text-align: center;
        font-size: xx-large;
    }
    .main-container
    {
        padding: 0.5rem;
        width: 90%;
    }
    .right_section
    {
        border: none;
    }
    .left_section
    {
        border: none
    }
    .field__label
    {
        text-align: left;
        font-size: x-large;
        margin-bottom: 5px
    }
    .field__input
    {
        border: 1px solid rgb(184, 182, 182);
        border-radius: 0.5rem;
        background-color: #F0F4EE;
        margin-bottom: 0.5rem;
        background-color: #D3D3D3;
        padding: 0 10px 0 10px;
        font-size: x-large;
        height: 40px;
        width: 1000px;
    }
    .field__input:focus
    {
        outline-color: #FFDE59;
        outline-width: 1px;
    }
    .textarea.field__input
    {
        width: 100%;
        height: 8rem;
        padding: 1rem 2rem;
        border: none;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }
    .field
    {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 30px 350px 0 350px;
    }
    .post-button
    {
        text-align: center;
        border-radius: 10px;
        background-color: #FFDE59;
        margin: 2em 1em 7em 1em;
        padding: 0.5em;
        display: inline-block;
        border: 4px #CCCCCC;
        width: 15%;
        transition: all 0.5s;
        cursor: pointer;
        font-size: x-large;
    }
</style>