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
        <div class="button_fav" v-on:click="addToFav"><button class="favorite styled" type="button">Ajouter en favoris</button></div>
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

<style>

</style>