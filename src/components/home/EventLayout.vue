<template>
    <div class="background">
        <router-link :to="{name: 'SingleEvent', params: { id: id }}">
            <img class="events-img" :src="imgSrc" :alt="imgAlt">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'EventLayout',
        props: {
            imgSrc: String,
            imgAlt: String,
            title: String,
            id: Number
        },
    }
</script>