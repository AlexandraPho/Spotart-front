<template>
    <section class="category-title">
        <h2>{{ name }}</h2>
    </section>
    <div class="filters">
        <p><a href="#">Filtrer par</a></p>
        <p><a href="#">2 résultats par page</a></p>
    </div>
</template>

<script>
    export default {
        name: 'CategoryTitleFilterLayout',
        props: {
            name: String,
        },
    }
</script>

<style scoped>
    /* Section CATEGORY TITLE and FILTER*/
    .category-title {
        background-image: url("../assets/images/smoke.jpg");
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
    .filters {
        display: flex;
        justify-content: space-between;
        padding: 0.3em 1.9em 0.8em 1.9em;
        /*border-bottom-style: solid;*/
        /*border-bottom-color: #FFDE59;*/
        font-size: 1.3em;
    }
    .filters p {
        margin-block: auto;
    }
    .filters a {
        outline: 3px;
        padding: 2px 1px 0;
        font-size: 1em;
        color: black;
    }
    .filters a:visited {
        color: black;
    }
    hr {
        border: #ffde59 solid 2px;
        width: 20%;
    }
</style>