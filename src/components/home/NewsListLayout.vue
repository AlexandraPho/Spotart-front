<template>
    <section class="next-events">
        <h2>Les prochains &Eacute;vénements</h2>
        <hr>
        <div class="events-carousel">
            <NewsLayout v-for="news in newsList" :key="news.title" :id="news.id" :imgSrc="news._embedded['wp:featuredmedia'][0].source_url" :imgAlt="news._embedded['wp:featuredmedia'][0].alt_text" :title="news.title.rendered" />
            <div class="arrows-events">
                <i class="lni lni-arrow-left-circle"></i>
                <i class="lni lni-arrow-right-circle"></i>
            </div>
        </div>
    </section>
</template>

<script>
    import NewsService from '@/services/NewsService.js';
    import NewsLayout from '@/components/home/NewsLayout.vue';

    export default {
        name: 'HomeEventsListLayout',
        components: {
            NewsLayout
        },
        data() {
            return {
                newsList: null    
            }
        },
        mounted() {
            NewsService.findAll().then(
                (response) => {
                    console.log(response.data);
                    this.events = response.data;
                }
            );
        },
    }
</script>