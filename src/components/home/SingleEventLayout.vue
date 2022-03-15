<template>
    <HeaderLayout />
    <EventInformationLayout v-if="event" :id="event.id" :key="event.title" :imgSrc="event._embedded['wp:featuredmedia'][0].source_url" :imgAlt="event._embedded['wp:featuredmedia'][0].alt_text" :title="event.title.rendered" :content="event.content.rendered" />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from "@/components/template/HeaderLayout.vue";
    import EventInformationLayout from "@/components/events/EventInformationLayout.vue";
    import FooterLayout from "@/components/template/FooterLayout.vue";

    import EventsService from "@/services/EventsService.js";

    export default {
        name: "SingleEventLayout",
        components: {
            HeaderLayout,
            EventInformationLayout,
            FooterLayout
        },
        data() {
            return {
                event: null
            }
        },
        mounted() {
            EventsService.find(this.$route.params.id).then(
                (response) => {
                    console.log('SingleEvent', response.data);
                    this.event = response.data;
                }
            );
        },

    }
</script>

<style>

</style>