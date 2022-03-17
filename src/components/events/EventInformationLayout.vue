<template>
    <article class="single-event">
        <h2 class="title-event" v-html="title"></h2>
        <hr><br>
        <img class="img-event" :src="imgSrc" :alt="imgAlt">
        <div class="content-event">
            <p v-html="content"></p>
        </div>
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

<style scoped>

    .single-event
    {
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title-event
    {
        font-size: 25px;
    }

    .img-event
    {
        width: 50vw;
        height: 50vh;
        border-radius: 20px;
        padding-top: 10px;
    }

    .content-event
    {
        font-size: 19px;
        text-align: center;
        margin: 10px 350px 10px 350px;
    }

</style>