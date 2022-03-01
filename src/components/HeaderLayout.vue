<template>
    <header>
        <h1 class="title-logo">Spot Art</h1>
        <ul class="header-links-list">
            <li class="header-link-element"><a class="header-anchor-element" href="#">Sculptures</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" href="#">Peintures</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" href="#">Photographies</a></li>
            <li>|</li>
            <li class="header-link-element"><a class="header-anchor-element" href="#">Dessins</a></li>
        </ul>
        <div>
            <a class="connexion-link" href="#">Connexion</a>
            <button class="publish-button">Partagez vos créations</button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderLayout',
    }
</script>

<style src="@/assets/css/header.css">

</style>