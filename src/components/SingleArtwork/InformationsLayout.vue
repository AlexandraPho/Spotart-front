<template>
    <article class="artwork">
        <div class="media-image">
            <img class="main-picture" v-bind:src="image" v-bind:alt="title">


            <!-- <div class="gallery">
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">
            </div>
            <nav>
                <div><a class="prev" href="#"></a></div>
                <div><a class="next" href="#"></a></div>
              </nav> -->

        </div>
        <section class="informations">
            <h1 v-html="title"></h1>
            <ul>
                <li>Artiste: {{ author }}</li>
                <li>Date: {{ getDate(date) }} </li>
            </ul>
        <section class="categories">
            <ul>
                <li><router-link :to="{ name: 'ArtForms', params: { id: categoryId } }"><a  v-html="category"></a>
        </router-link></li>            
            </ul>
        </section>

        <section class="description">
            <p v-html="content"></p>
        </section>
        <div class="button_fav" v-on:click="addToFav"><button class="favorite styled" type="button">{{button}}</button></div>
    </section>
    </article>
</template>

<script>
import moment from 'moment';
import FavouritesService from '@/services/FavouritesService.js';

export default {
    name: 'InformationsLayout',
    props: {
        id: Number,
        title: String,
        author: String,
        category: String,
        content: String,
        image: String,
        date: String,
        categoryId: Number
    },
    data() {
        return {
          artworks:null,
          button: 'Ajouter à mes favoris',
        }
    },
    mounted() {
        console.log('here');
     // We are managing here the appearance of the button "add to fav" or "delete of our fav"
     // depending if the 
         if(this.$store.state.token){
         FavouritesService.findFavouriteByUserID(this.$store.state.userID).then(response => {
            // console.log('je suis dans mounted call API FindFavouritebyUserID')
            // console.log(response.data);
            this.artworks = response.data;
            this.artworks.some(a=>a.ID == this.id);
            if(this.artworks.some(a=>a.ID == this.id)){
                this.button = 'Enlever de mes favoris';
                }  
            })        
        }
    },             
    methods: {
    getDate : function (date) {
        moment.locale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        }
        });
        moment.locale('fr');
        return moment(date, 'YYYY-MM-DD').format('LL');
        },
    addToFav() {
      // we are calling the service so we can add one artwork in the favourite of our user
      // the method we will use to add this relation is called createNewRelation and is waiting for two arg the datas (userID and postID) and a callback
      
      // if the user is connected => we launch the service to insert the relation
        
    if(this.$store.state.token){

        FavouritesService.createNewRelation(
        { user_id : this.$store.state.userID, post_id : this.id}, 
        () => {
        this.$router.push({ name: "UserAccount", params: { id : this.$store.state.userID }})
        console.log('INSERTION FINIE');
      }); // if the user is not connected, we will redirect him to the connection page
      } else {
        this.$router.push({ name: "Connection"})
      }
      
    }

  }
}
</script>

<style scoped>



    * {
        box-sizing: border-box;
    }

    h1{
        font-size: 1.5rem;
    }
    
    li {
        list-style-type:none;
    }

    .categories li {
        border-radius: 10px;
        background-color: #FFDE59;
        padding: 1rem;
        display: inline-block;

    }

    .styled {
        justify-content: center;
        border: 0;
        line-height: 2.5;
        padding: 0 20px;
        font-size: 1rem;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        background-color: rgb(0, 0, 0);
    }

    .styled:hover {
    background-color: rgb(88, 87, 87);
    cursor: pointer;
}

@media (max-width: 768px){

.main-picture{
    max-width:100%;
    height:auto;
    margin-right: auto;
    margin-left: auto;
}

}

@media (min-width: 768px){

.artwork {
    width: 100%;
    display: flex;
    margin: 1.5rem;
    padding: 0.5rem;
}

.informations{
    width: 50%;
    margin-bottom: 1rem;
    margin-right: 2rem;
    margin-left: 1rem;
}

.media-image{
    width: 50%;
    display: block;
    margin-bottom: 1rem;
    margin-right: 2rem;
    margin-left: 1rem;
}

h1 {
    text-align: center;
}

.main-picture{
    box-sizing: border-box;
    width: 100%;
    max-height: 500px;
    margin-right: auto;
    margin-left: auto;
}
}

</style>