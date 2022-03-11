<template>
    <div class="background">
        <router-link :to="{title: 'SingleEvent', params: { id: id }}">
            <img :src="imgSrc" :alt="imgAlt">
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