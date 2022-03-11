<template>
    <div class="background">
        <router-link :to="{title: 'News', params: {id: id}}">
            <img :src="imgSrc" :alt="imgAlt">
            <h2 v-html="title"></h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'NewsLayout',
        props: {
            imgSrc: String,
            imgAlt: String,
            title: String,
            id: Number
        },
    }
</script>