<template>
        <article class="artwork">
        <div class="media-image">
            <img class="main-picture" v-bind:src="image" v-bind:alt="title">

            <div class="gallery">
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">>
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">>
                <img class="gallery-picture" v-bind:src="image" v-bind:alt="title">>
            </div>
            <nav>
                <div><a class="prev" href="#"></a></div>
                <div><a class="next" href="#"></a></div>
              </nav>
        </div>
        <section class="informations">
            <h1 v-html="title"></h1>
            <ul>
                <li>Artiste: {{ author }}</li>
                <li>Date: {{ date }} </li>
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
    </section>
    </article>
</template>

<script>
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
}
</script>

<style>

</style>

