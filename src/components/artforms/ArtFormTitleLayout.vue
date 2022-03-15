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
        background-size: cover;
        height: 10em;
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
        padding-top: 0.2em;
    }

    @media (min-width: 320px) {
        .category-title {
            /*background-image: url(http://localhost:8080/img/smoke.70cd88a0.jpg);
            background-size: cover;*/
            height: 5em;
        }
        .category-title h2 {
            text-align: center;
            /* color: #FFDE59; */
            height: 0.5em;
            font-size: 2em;
            /* margin: auto; */
            align-items: center;
            display: flex;
            justify-content: center;
            letter-spacing: 0.2em;
            text-shadow: 5px 5px 15px grey;
            padding-top: 1em;
        }
    }
    @media (min-width: 768px) {
        .category-title {
            /*background-image: url(http://localhost:8080/img/smoke.70cd88a0.jpg);
            background-size: cover;*/
            height: 5em;
        }
        .category-title h2 {
            text-align: center;
            /*color: #FFDE59;*/
            height: 0.5em;
            font-size: 2em;
            /* margin: auto; */
            align-items: center;
            display: flex;
            justify-content: center;
            letter-spacing: 0.2em;
            text-shadow: 5px 5px 15px grey;
            padding-top: 1em;
        }
    }
    @media (min-width: 1200px) {
        .category-title {
            /*background-image: url(http://localhost:8080/img/smoke.70cd88a0.jpg);
            background-size: cover;*/
            height: 8em;
        }
        .category-title h2 {
            text-align: center;
            /*color: #FFDE59;*/
            height: 1em;
            font-size: 2.5em;
            align-items: center;
            display: flex;
            justify-content: center;
            letter-spacing: 0.2em;
            text-shadow: 5px 5px 15px grey;
            padding-top: 1.2em;
        }
    }
</style>