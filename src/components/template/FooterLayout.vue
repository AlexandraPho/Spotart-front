<template>
    <footer>
        <ul class="footer-links-list">
            <li class="footer-link-element" v-for="footerLink in footerLinks" :key="footerLink.name">
                <router-link class="footer-anchor-element" :to="footerLink.link">{{ footerLink.name }}</router-link>
            </li>
        </ul>
        <div class="footer-middle-section">
            <h1 class="title-logo">Spot Art</h1>
            <ul class="icons-list">
                <li v-for="socialMediaLink in SocialMediaLinks" :key="socialMediaLink.name">
                    <router-link class="icon-element" :to="socialMediaLink.link" hrel="pinterest-icon">
                        <i class="'lni lni-' + {{ socialMediaLink.name }}"></i>
                    </router-link>
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
        name: 'FooterLayout',
        data() {
            return {
                footerLinks: [
                    {
                        name: "Contact",
                        link: "/contact"
                    },
                    {
                        name: "A propos",
                        link: "/about"
                    },
                    {
                        name: "Plan du site",
                        link: "/sitemap"
                    },
                    {
                        name: "Mentions légales",
                        link: "/legal-notice"
                    }
                ],
                socialMediaLinks: [
                    {
                        name: "pinterest",
                        link: "https://www.pinterest.fr/"
                    },
                    {
                        name: "instagram",
                        link: "https://www.instagram.com/?hl=fr"
                    },
                    {
                        name: "facebook",
                        link: "https://fr-fr.facebook.com/"
                    },
                    {
                        name: "twitter",
                        link: "https://twitter.com/?lang=fr"
                    }

                ]
            }
        }
    }
</script>

<style scoped>

    footer {
        background-color: #000000;
        display: flex;
        justify-content: space-between;
        width: 100vw;
        max-width: 100%;
    }
    footer .footer-links-list {
        padding-left: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    footer .footer-links-list .footer-link-element .footer-anchor-element {
        font-size: xx-large;
        color: #ffde59;
    }
    footer .footer-middle-section {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    footer .footer-middle-section .icons-list {
        display: flex;
        gap: 30px;
        font-size: xx-large;
        list-style: none;
        padding: 0;
        margin: 10px 0 0 0;
    }
    footer .footer-middle-section .icons-list i {
        color: #ffde59;
    }
    footer .newsletter-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-color: #000000;
        border-style: solid;
        padding-right: 40px;
    }
    footer .newsletter-form label {
        color: #ffffff;
        font-size: x-large;
        justify-content: center;
    }
    footer .newsletter-form input {
        padding-left: 15px;
        font-size: x-large;
        width: 300px;
        height: 35px;
        border-radius: 10px;
    }

</style>