<template>
     <section class="pages">
            <ul class="pages-links">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">...</a></li>
            </ul>
        </section>
</template>

<script>

    export default {
        name: 'CategorySwitchPage',
    }
</script>

<style scoped>
    /*Others PAGES LINKS section*/
    .pages .pages-links {
        display: flex;
        justify-content: center;
    }
    .pages .pages-links a {
        text-decoration: none;
        color: black;
    }
    .pages .pages-links a:visited {
        color: #483b06;
    }
    .pages .pages-links li {
        margin: 10px;
        list-style: none;
        border: solid 2px black;
        padding: 0.3em 0.6em 0.3em 0.6em;
    }
</style>