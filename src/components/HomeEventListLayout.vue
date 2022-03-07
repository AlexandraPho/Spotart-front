<template>
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
</template>

<script>
    import EventsServices from '@/services/EventsServices.js';

    export default {
        name: 'HomeEventListLayout',
        mounted() {
            // Attention, on ne traite pas pour l'instant les cas d'erreurs
            EventsServices.findAll().then(
                // Executer le code qui permet de recuperer le résultat de ma requete
                // Permet de garder le contexte et de recuperer response
                (response) => {
                    console.log(response.data);
                    this.artworks = response.data;
                }
            );
        },
    }
</script>

<style scoped>

    h2 {
        text-align: center;
        margin-bottom: 5px;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 8%;
    }
    .next-events {
      padding: 0 120px 10px 120px;
    }
    .next-events .background {
      display: flex;
      margin-top: 20px;
      height: 400px;
      /* background-image: url("../images/urban_art_fair_2021-banner.jpg"); */
      background-color: azure;
      background-repeat: no-repeat;
      background-size: 100% 400px;
    }
    .next-events .background .arrows-events {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 0 40px 0 40px;
      color: #ffde59;
      font-size: xxx-large;
    }

</style>