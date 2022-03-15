<template>
  <header-layout />
  <h1>SPOT ART TEAM</h1>
  <section class="team">
      <p class="j"><span>JESS</span>/Product Owner</p>
    <div class="jess">#</div>
     <p class="a"><span>AUDE</span>/Référent technique(back)</p>
    <div class="aude">#</div>
     <p class="aa"><span>ALEXANDRA</span>/Lead dev Back/Référent technique(front)</p>
    <div class="alexandra">#</div>
     <p class="t"><span>THEO</span>/Scrum Master/Lead dev Front</p>
    <div class="théo">#</div>
     <p class="aaa"><span>AHLAM</span>/Référent technique(Git)</p>
    <div class="ahlam">#</div>
  </section>
  <footer-layout />
</template>

<script>
import HeaderLayout from "@/components/template/HeaderLayout.vue";
import FooterLayout from "@/components/template/FooterLayout.vue";
export default {
  name: "AboutApp",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

<style>
span{

    color: brown;
}

h1 {
  border: solid 1px black;
  background-color: black;
  text-align: center;
  color: blanchedalmond;
}
.jess {
  border: solid 1px;
  width: 15%;
  height: 15%;
  position: relative;
  left: 5%;
  top: 82px;
  padding-bottom: 15%;
  background-image: url("https://media0.giphy.com/media/jay84kEMtZ2kU/200.webp?cid=ecf05e47irgob0ahv96tzc1yv5t39dbsrq567c2ai47ox32f&rid=200.webp&ct=g");
}
p.j {
    position: relative;
    left: 10%;
    top: 79px;
    font-weight: 800;
}
.aude {
  border: solid 1px;
  width: 15%;
  height: 15%;
  position: relative;
  left: 25%;
  top: -184px;
  padding-bottom: 15%;
  background-image: url("https://media4.giphy.com/media/Sp7IpE95BqzOU/200w.webp?cid=ecf05e47qe7f927567pfvvrchxupjrsgnionbxj5xcdbrxvn&rid=200w.webp&ct=g");
}
p.a {
    position: relative;
    left: 27%;
    top: -191px;
    font-weight: 800;
}
.alexandra {
  border: solid 1px;
  width: 15%;
  height: 15%;
  position: relative;
  left: 45%;
  top: -451px;
  padding-bottom: 15%;
  background-image: url("https://media0.giphy.com/media/PXPBgElnX7UvIJGVVS/200w.webp?cid=ecf05e47fzbzmis8ascnb5l455vun763k9ugu76nq3ttuup1&rid=200w.webp&ct=g");
}
p.aa {
    position: relative;
    bottom: 29em;
    left: 46em;
     font-weight: 800;
}
.théo {
  border: solid 1px;
  width: 15%;
  height: 15%;
  position: relative;
  left: 65%;
  top: -45rem;
  padding-bottom: 15%;
  background-image: url(" https://media4.giphy.com/media/SQgslloVAQuLC/200w.webp?cid=ecf05e47diyra2eckq6fpk5a5z346s3o82eod3gwpvqczdbu&rid=200w.webp&ct=g");
}
p.t {
    position: relative;
    bottom: 46em;
    left: 68em;
     font-weight: 800;
}
.ahlam {
  border: solid 1px;
  width: 15%;
  height: 15%;
  position: relative;
  left: 85%;
  top: -62rem;
  padding-bottom: 15%;
  background-image: url(" https://media4.giphy.com/media/x5HlLDaLMZNVS/200w.webp?cid=ecf05e47diyra2eckq6fpk5a5z346s3o82eod3gwpvqczdbu&rid=200w.webp&ct=g");
}
p.aaa {
    position: relative;
    bottom: 62em;
    left: 90em;
    font-weight: 800;
}

section.team {
  padding-bottom: 20%;
  position: relative;
  right: 39px;
}
</style>