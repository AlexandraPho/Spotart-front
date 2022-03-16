<template>
    <div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App",
    };
</script>


<style>
/*     @import url("https://code.jquery.com/jquery-3.2.1.slim.min.js");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"); */

    @import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Belleza&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  /* GENERAL */

    body
    {
        padding: 0;
        margin: 0;
    }

    * {
        font-family: Belleza;
    }

@media (min-width: 320px) and (max-width: 768px) {

    h2 {
        text-align: center;
        margin-bottom: 5px;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 38%;
    }
}

@media (min-width: 768px) and (max-width: 1200px) {

    h2 {
        text-align: center;
        margin-bottom: 5px;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 25%;
    }
}

@media (min-width: 1200px) and (max-width: 1440px) {

    h2 {
        text-align: center;
        margin-bottom: 5px;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 20%;
    }
}

@media (min-width: 1440px) and (max-width: 1600px) {

    h2 {
        text-align: center;
        margin-bottom: 5px;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 18%;
    }
}

@media (min-width: 1600px) {

    h2 {
        text-align: center;
        margin-bottom: 5px;
    }
    hr {
        border: #ffde59 solid 1px;
        width: 18%;
    }
}

/*     h1,
    img,
    li,
    a {
       cursor: pointer; 
    } */

</style>
