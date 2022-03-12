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
    * {
        font-family: Belleza;
    }
    .title-logo {
        font-family: Cormorant Garamond;
        font-size: xxx-large;
        color: #ffffff;
        padding: 0px;
        margin: 0px;
        text-transform: uppercase;
    }

    h1,
    img,
    li,
    a,
    button {
       cursor: pointer; 
    }
    body {
        background:
        linear-gradient(white, transparent),
        linear-gradient(to top left, white, transparent),
        linear-gradient(to top right, #ffde59, transparent);
        background-blend-mode: screen;
    }

</style>
