<template>
    <section class="next-events">
        <h2>Les prochains &Eacute;vénements</h2>
        <hr>
        <div class="events-carousel">
            <EventLayout v-for="event in events" :key="event.title" :id="event.id" :imgSrc="event._embedded['wp:featuredmedia'][0].source_url" :imgAlt="event._embedded['wp:featuredmedia'][0].alt_text" :title="event.title.rendered" />
        </div>
    </section>
</template>

<script>
    import EventsService from '@/services/EventsService.js';
    import EventLayout from '@/components/home/EventLayout.vue';

    export default {
        name: 'HomeEventsListLayout',
        components: {
            EventLayout
        },
        data() {
            return {
                events: null    
            }
        },
        mounted() {
            EventsService.findAll().then(
                (response) => {
                    console.log('Events', response.data.slice(0, 4));
                    this.events = response.data;
                }
            );
        },
    }
</script>

<style>

    @media (min-width: 320px) and (max-width: 768px) {

        .events-carousel
        {
            display: flex;
            justify-content: center;
            margin: 1rem;
            margin-bottom: 1.5rem;
            /* gap: 2rem; */
            /* flex-wrap: wrap;
            /* align-items: flex-end; */
        }

        .events-img
        {
            height: 12rem;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            box-shadow: 8px 8px 10px 0 rgb(0 0 0 / 50%);
            /* transition: all 0.3s;
            /* width: 50vw; */
        }

        .events-img:hover
        {
            border: 2px solid #000000;
            box-shadow: 8px 8px 10px 0 rgba(0,0,0,0.5);
            transform: scale(1.2);
            cursor: pointer;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {

        .events-carousel
        {
            display: flex;
            justify-content: center;
        }

        .events-img
        {
            height: 25vh;
            width: 45vh;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
        }

        .events-img:hover
        {
            border : 2px solid #000000;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            transform:scale(1.05);
            cursor: pointer;
        } 
    }

    @media (min-width: 1200px) and (max-width: 1600px) {

        .events-carousel
        {
            display: flex;
            justify-content: center;
        }

        .events-img
        {
            height: 50vh;
            width: 75vh;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
        }

        .events-img:hover
        {
            border : 2px solid #000000;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            transform:scale(1.05);
            cursor: pointer;
        }
    }

    @media (min-width: 1600px) {

        .events-carousel
        {
            display: flex;
            justify-content: center;
        }

        .events-img
        {
            height: 50vh;
            width: 100vh;
            border-radius: 10px;
            filter: drop-shadow(0 0 0.50rem black);
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
        }

        .events-img:hover
        {
            border : 2px solid #000000;
            box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
            transform:scale(1.05);
            cursor: pointer;
        }
    }

</style>