<template>
    <section class="next-events">
        <div class="events-carousel">
            <NewsLayout v-for="news in newsList" :key="news.title" :id="news.id" :imgSrc="news._embedded['wp:featuredmedia'][0].source_url" :imgAlt="news._embedded['wp:featuredmedia'][0].alt_text" :title="news.title.rendered" />
            <div class="arrows-events">
                
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
                    console.log('News', response.data.slice(0, 4));
                    this.events = response.data;
                }
            );
        },
    }
</script>

<style scoped>

/*     .news-img
    {
        height: 40vh;
    }
    
    .news-img
    {
        object-fit: cover;
        width: 100%;
        // background: linear-gradient(to right, transparent 0%, black 100%);
    } */

</style>