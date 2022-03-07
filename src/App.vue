<template>
    <div>
        <router-view/>
    </div>
</template>

<script>

    export default
    {
        name: 'App',
    }

</script>


<style>
    /* Import for the fonts used in the project */
    @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Belleza&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    /* 
    To import locally a font family :
        @font-face {
        font-family: "Merienda";
        src: local("Merienda"),   url(./fonts/Merienda/Merienda-Regular.ttf) format("truetype");}
    */


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
    a {
       cursor: pointer; 
    }

</style>