<template>
    <div>
        <HeaderLayout />
        <main>
        <div class="carousel">
            <div class="arrows">
                <i class="lni lni-arrow-left-circle"></i>
                <i class="lni lni-arrow-right-circle"></i>
            </div>
        </div>
        <br>
        <div class="content">
            <section class="latest-artworks">
                <h2>Les dernières Oeuvres</h2>
                <hr>
                <section class="artworks">
                    <article class="first-artwork"></article>
                    <article class="second-artwork"></article>
                    <article class="third-artwork"></article>
                    <article class="fourth-artwork"></article>
                </section>
            </section>
            <section class="artists-zoom">
                <h2>Zoom sur nos Artistes</h2>
                <hr>
                <section class="artists">
                    <article class="first-artist">
                        <h3>Chapeau</h3>
                    </article>
                    <article class="second-artist">
                        <h3>Tatouage</h3>
                    </article>
                    <article class="third-artist">
                        <h3>Pinceau</h3>
                    </article>
                    <article class="fourth-artist">
                        <h3>Bandana</h3>
                    </article>
                </section>
            </section>
            <section class="next-events">
                <h2>Les prochains &Eacute;vénements</h2>
                <hr>
                <div class="events-carousel">
                    <div class="background">
                        <div class="arrows-events">
                            <i class="lni lni-arrow-left-circle"></i>
                            <i class="lni lni-arrow-right-circle"></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <br>
        <FooterLayout />
    </div>
</template>

<script>
    import HeaderLayout from '@/components/HeaderLayout.vue';
    import FooterLayout from '@/components/FooterLayout.vue';

    export default {
        name: 'HomeApp',
        components: {
            HeaderLayout,
            FooterLayout
        }
    }
</script>

<style src="@/assets/css/home.css">

</style>