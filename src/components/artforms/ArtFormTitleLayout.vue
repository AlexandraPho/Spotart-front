<template>
    <section class="category-title">
        <h2>{{ name }}</h2>
    </section>
</template>

<script>
    export default {
        name: 'ArtFormTitleLayout',
        props: {
            name: String,
        },
    }
</script>

<style scoped>

    .category-title {
        background-image: url("@/assets/images/smoke.jpg");
        /*background-color: grey;*/
        background-size: cover;
        height: 15em;
    }
    .category-title h2 {
        text-align: center;
        color: #FFDE59;
        height: 2em;
        font-size: 4em;
        margin: auto;
        align-items: center;
        display: flex;
        justify-content: center;
        letter-spacing: 0.2em;
        text-shadow: 5px 5px 15px grey;
        padding-top: 0.8em;
    }
</style>