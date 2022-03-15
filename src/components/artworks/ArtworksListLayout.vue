<template>
    <section class="artist-artwork">
        <div class="photos-titles">
            <img v-bind:src="image" v-bind:alt="title">
            <div class="overlay-author-title">
                <p class="artwork-title" v-html="title"></p>
                <p class="artwork-author">{{ author }}</p>
                <!--<p class="eye-icon"><i class="fa-solid fa-eye"></i></p>-->
            </div>
            
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ArtworksListLayout',
        props: {
            title: String,
            image: String,
            author: String,
        },
    }
    
</script>

<style scoped>

    .artist-artwork {
        display: inline-flex;
        justify-content: space-around;
       /* margin: 1.5em 3em 0.2em 9em;*/
        gap: 7vw;
        height: 30vh;
        position: relative;
    }
    .artist-artwork .photos-titles{
       margin: 1em;
       
    }

    .artist-artwork .artwork-title,
    .artist-artwork .artwork-author {
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
    
    .artist-artwork img {
        width: 12vw;
        height: 75%;
        border-radius: 0.5vw;
        filter: drop-shadow(0 0 0.50rem black);
    }
    .overlay-author-title {
        position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 7vw;
            opacity: 0;
            top: 18%;
            left: 12%;
            z-index: 1;
            font-size: 1vw;
            font-weight: bold;
            padding: 1vw;
            text-align: center;
        
    }
    .artist-artwork:hover .overlay-author-title {
        cursor: pointer;
        opacity: 1;
    }

    @media (min-width: 320px) {
        .artist-artwork {
            position: relative;
            margin: 1.5em 0.5em 0.5em 1.9em;
            
        }
        .artist-artwork img {
            width: 30vw;
            height: 30vw;
            border-radius: 0.5vw;
            filter: drop-shadow(0 0 0.50rem black);
        }
        .overlay-author-title {
            position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 20vw;
            opacity: 0;
            top: 18%;
            left: 18%;
            z-index: 1;
            font-size: 3vw;
            font-weight: bold;
            padding: 10px;
            text-align: center;
        }
    }

    @media (min-width: 768px) {
        .artist-artwork {
            display: inline-flex;
            justify-content: space-around;
            margin: 1.5em 3em 0.2em 5.5em;
            gap: 7vw;
            height: 30vh;
            position: relative;
        }
         .artist-artwork img {
            width: 25vw;
            height: 70%;
            border-radius: 0.5vw;
            filter: drop-shadow(0 0 0.50rem black);
        }
        .overlay-author-title {
            position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 20vw;
            opacity: 0;
            top: 25%;
            left: 13%;
            z-index: 1;
            font-size: 2vw;
            font-weight: bold;
            padding: 1vw;
            text-align: center;
        }
    }
        
    @media (min-width: 1200px) {
        .artist-artwork {
            display: inline-flex;
            justify-content: space-around;
            margin: 2em 3em 0.5em 11em;
            gap: 7vw;
            height: 30vh;
            position: relative;
        }
        .artist-artwork img {
            width: 10vw;
            height: 80%;
            border-radius: 0.5vw;
            filter: drop-shadow(0 0 0.50rem black);
        }
        .overlay-author-title {
            position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 7vw;
            opacity: 0;
            top: 18%;
            left: 11%;
            z-index: 1;
            font-size: 1vw;
            font-weight: bold;
            padding: 1vw;
            text-align: center;
        }
    }
</style>