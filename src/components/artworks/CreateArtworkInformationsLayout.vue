<template>
    <div class="container-form">
        <div class="container">

            <form class="publish-artwork-form">

                <p v-if="success">{{ success }}</p>
                <p v-for="error in errors" :key="error">{{ error }}</p>

                <div class="field">
                    <label class="field__label">Titre de l'oeuvre</label>
                    <input v-model="title" type="text" class="field__input">
                </div>

                <div class="field">
                    <label class="field__label">Description de l'oeuvre</label>
                    <input v-model="content" type="textarea" class="field__input"><br>
                </div>

                <div class="field">
                    <label class="field__label">Choisissez la forme d'art</label>
                    <select v-model="artform">
                        <option v-for="artform in artforms" :key="artform.name" :value="artform.id" v-html="artform.name"></option>
                    </select>
                </div>

                <br><br><br>
            </form>

        </div>
    </div>
</template>

<script>
    import ArtworksService from '@/services/ArtworksService.js';
    import ArtformsService from '@/services/ArtFormsService.js'; 

    export default {
        name: "CreateArtworkInformationsLayout",
        props: {
            mediaId: Number,
        },
        data() {
            return {
                success: null,
                errors: [],
                title: null,
                artforms: [],
                artform: null,
                content: null,
                status: "publish",
                author: this.$store.state.userID
            }
        },
        methods: {

            CreatePost() {
                this.errors = [];
                if(!this.title) {
                    this.errors.push("Le champ de titre doit être rempli");
                }
                if(!this.artform) {
                    this.errors.push("Une forme d'art doit être choisi");
                }
                if(!this.content) {
                    this.errors.push("Le champ de description doit être rempli");
                }
                if(!this.mediaId) {
                    this.errors.push("Vous devez choisir une image");
                }
                ArtworksService.CreatePost({
                    title: this.title,
                    artforms: [this.artform],
                    content: this.content,
                    status: this.status,
                    featured_media: this.mediaId,
                    author: this.author
                }, (data) => {
                    this.errors.push(data);

                    if(data.type === "success") {
                        this.success = "Vous avez publiez votre oeuvre !";
                    } else {
                        this.errors.push(data.message);
                    }
                })
            }
        },
        mounted() {
            ArtformsService.findAll().then(
                (response) => {
                    console.log('Artforms Options', response.data);
                    this.artforms = response.data;
                }
            );
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

</style>