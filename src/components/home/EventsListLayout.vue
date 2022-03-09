<template>
    <section class="next-events">
        <h2>Les prochains &Eacute;vénements</h2>
        <hr>
        <div class="events-carousel">
            <EventLayout v-for="event in events" :key="event.title" :id="event.id" :imgSrc="event._embedded['wp:featuredmedia'][0].source_url" :imgAlt="event._embedded['wp:featuredmedia'][0].alt_text" :title="event.title.rendered" />
            <div class="arrows-events">
                <i class="lni lni-arrow-left-circle"></i>
                <i class="lni lni-arrow-right-circle"></i>
            </div>
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
                    console.log('Events', response.data);
                    this.events = response.data;
                }
            );
        },
    }
</script>