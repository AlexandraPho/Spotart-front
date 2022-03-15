<template>
    <article>
        <h2 v-html="title"></h2>
        <hr><br>
        <img :src="imgSrc" :alt="imgAlt">
        <p v-html="content"></p>
    </article>
</template>

<script>
    export default {
        name: "EventInformationLayout",
        props: {
            title: String,
            content: String,
            imgSrc: String,
            imgAlt: String,
            id: Number
        }
    }
</script>

<style>

</style>