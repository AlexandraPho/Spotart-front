<template>
    <section class="next-events">
        <h2>Les prochains &Eacute;vénements</h2>
        <hr><br>
        <div class="events-carousel">
            <EventLayout v-for="event in events" :key="event.title" :id="event.id" :imgSrc="event._embedded['wp:featuredmedia'][0].source_url" :imgAlt="event._embedded['wp:featuredmedia'][0].alt_text" :title="event.title.rendered" />
        </div>
    </section>
    <br><br>
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
    }

</style>