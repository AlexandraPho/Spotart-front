<template>
        <article class="artwork">
        <div class="media-image">
            <img class="main-picture" v-bind:src="image" v-bind:alt="title">

<!--
            <div class="gallery">
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">
            </div>
            <nav>
                <div><a class="prev" href="#"></a></div>
                <div><a class="next" href="#"></a></div>
              </nav>
              -->
        </div>
        <section class="informations">
            <h1 v-html="title"></h1>
            <ul>
                <li>Artiste: {{ author }}</li>
                <li>Date: {{ getDate(date) }} </li>
                <li>Dimension: 1023.6 x 892.7 cm</li>
            </ul>
        <section class="categories">
            <ul>
                <li><a href="#" v-html="category"></a></li>
            </ul>
        </section>
        <section class="description">
            <p v-html="content"></p>
        </section>
        <div class="button_fav"><button class="favorite styled" type="button">Ajouter en favoris</button></div>
    </section>
    </article>
</template>

<script>
import moment from 'moment';

export default {
    name: 'InformationsLayout',
    props: {
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
        }
    }
}
</script>

<style>

</style>

