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
            <hr>
            <ul class="list-infos">
                <li>Artiste:  {{ author }}</li>
                <li>Date:  {{ getDate(date) }} </li>
            </ul>
        <section class="categories">
            <ul>
                <li><a href="#" v-html="category"></a></li>
            </ul>
        </section>
        <section class="description">
            <p class="content" v-html="content"></p>
        </section>
        <div class="button-fav" v-on:click="addToFav"><button class="favorite styled" type="button">Ajouter en favoris</button></div>
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
        date: String
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
    @media (min-width: 320px) and (max-width: 768px) {
        .artwork {
            /*width: 50%; */
            height: 10%;
            /* display: flex; */
            justify-content: flex-start;
            padding: 0.5rem;
        }
        .media-image{
            /*width: 80%; */
            display: flex;
            justify-content: center;
            margin: 2rem;
            /* margin-right: 2rem; */
            /* margin-left: 1rem;*/
        }
        .main-picture{
            /*box-sizing: border-box;*/
            width: 80%;
            /*max-height: 500px;*/
            /*margin-right: auto;*/
            /*margin-left: auto;*/
        }
        .informations{
            /*width: 80%;*/
            /* margin-bottom: 1rem; */
            /* margin-right: 2rem; */
            margin: 2rem;
            /* display: block;*/
        }
        .list-infos {
            display: block;
            text-align: center;
        }
        .categories,
        .button-fav {
            display: flex;
            justify-content: center;
        }
        h1,
        p {
            text-align: center;
        }
        ul {
            padding: 0;
        }
        
    }
    
    @media (min-width: 768px) and (max-width: 1200px) {
        .artwork {
            /*width: 50%; */
            height: 10%;
            display: block;
            /* justify-content: flex-start; */
            /* margin: 1.5rem; */
            padding: 2rem;
        }
        .media-image{
            /*margin-bottom: 1rem; */
            /* margin-right: 2rem; */
            /* margin-left: 1rem; */
            justify-content: center;
            display: flex;
        }
        .main-picture{
            /* box-sizing: border-box; */
            /* width: 100%; */
            /* max-height: 30rem; */
            /* margin-right: auto; */
            /* margin-left: auto; */
            margin-top: 2.5rem;
            width: 40%;
        }
        .informations{
            /*width: 50%; */
            /* margin-bottom: 1rem; */
            /* margin-right: 2rem; */
            /* margin-left: 1rem; */
            margin: 1.5rem;
        }
        .list-infos,
        .button-fav,
        .categories {
            display: block;
            text-align: center;
            padding: 0;
        }
        h1,
        p {
            text-align: center;
            font-size: 1.5rem;
        }
        ul {
            padding: 0;
        }
    }

    @media (min-width: 1200px) {

        .artwork {
            /*width: 50%; */
            height: 10%;
            display: flex;
            flex-direction: row;
            margin: 1rem;
            padding: 1rem;
        }
        .media-image {
            display: flex;
            justify-content: center;
            /* align-items: center; */
            width: 50%;
            margin: 1.5rem;
        }
        .main-picture {
            /*box-sizing: border-box; */
            /* width: 60%; */
            /* height: 60%; */
            max-height: 25rem;
            max-width: 35rem;
            /* border-radius: 20px;*/
        }
        .informations {
            /* font-size: 20px; */
            display: flex;
            flex-direction: column;
            gap: 10px;
            text-align: center;
            padding: 1rem;
        }
        .informations ul {
            padding: 0
        }

        .informations .categories ul {
            padding: 0;
            margin: 0;
        }
        .list-infos {
            font-size: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        h1 {
            font-size: xx-large;
            margin-bottom: 1px;
            margin-top: 0;
            text-align: center;
        }

        .categories ul li a {
            text-decoration: none;
            color: black;
            cursor: auto; /*todo Change to make the cursor link appear again after the presentation  */
        }
    }
</style>