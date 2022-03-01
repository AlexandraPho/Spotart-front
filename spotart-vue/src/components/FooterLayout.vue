<template>
    <footer>
        <ul class="footer-links-list">
            <li class="footer-link-element"><a class="footer-anchor-element" href="#">Contact</a></li>
            <li class="footer-link-element"><a class="footer-anchor-element" href="#">A propos</a></li>
            <li class="footer-link-element"><a class="footer-anchor-element" href="#">Plan du site</a></li>
            <li class="footer-link-element"><a class="footer-anchor-element" href="#">Mentions légales</a></li>
        </ul>
        <div class="footer-middle-section">
            <h1 class="title-logo">Spot Art</h1>
            <ul class="icons-list">
                <li>
                    <a class="icon-element" href="#" hrel="pinterest-icon"><i class="lni lni-pinterest"></i></a>
                </li>
                <li>
                    <a class="icon-element" href="#" hrel="instagram-icon"><i class="lni lni-instagram"></i></a>
                </li>
                <li>
                    <a class="icon-element" href="#" hrel="facebook-icon"><i class="lni lni-facebook"></i></a>
                </li>
                <li>
                    <a class="icon-element" href="#" hrel="twitter-icon"><i class="lni lni-twitter"></i></a>
                </li>
            </ul>
        </div>
        <fieldset class="newsletter-form">
            <label for="email">S'inscrire à la newsletter :</label>
            <input type="email" placeholder="robert@gmail.com">
        </fieldset>
    </footer>
</template>

<script>
    export default {
        name: 'HeaderLayout',
    }
</script>

<style src="@/assets/css/footer.css">

</style>