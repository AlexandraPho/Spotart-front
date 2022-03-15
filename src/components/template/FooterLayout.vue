<template>
    <footer>
        <ul class="footer-links-list">
            <li class="footer-link-element" v-for="footerLink in footerLinks" :key="footerLink.name">
                <router-link class="footer-anchor-element" :to="footerLink.link">{{ footerLink.name }}</router-link>
            </li>
        </ul>
        <div class="footer-middle-section">
<<<<<<< HEAD
            <h1 class="title-logo">
                <router-link :to="{name: 'Home'}">Spot Art</router-link>
            </h1>
            <ul class="icons-list">
=======
            <h1 class="title-logo">Spot Art</h1>
            <!-- <ul class="icons-list">
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
                <li v-for="socialMediaLink in SocialMediaLinks" :key="socialMediaLink.name">
                    <router-link class="icon-element" :to="socialMediaLink.link" hrel="pinterest-icon">
                        <!--<i class="'lni lni-' + {{ socialMediaLink.name }}"></i>-->
                        <!--<font-awesome-icon icon="fa-brands fa-facebook" />-->
                    </router-link>
                </li>
            </ul> -->
        </div>
        <fieldset class="newsletter-form">
            <label for="email">S'inscrire à la newsletter :</label>
            <input type="email" placeholder="robert@gmail.com">
        </fieldset>
    </footer>
</template>

<script scoped>
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

<<<<<<< HEAD
    footer {
        background-color: #000000;
        display: flex;
        justify-content: space-between;
        width: 100vw;
        max-width: 100%;
    }
    footer .title-logo a {
        padding-left: 1em;
        flex-grow: 1;
        text-decoration: none;
        color: #ffffff;
        font-family: Cormorant Garamond;
        background: linear-gradient(to right, #ffde59 10%, white 50%,#ffde59  60%);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 8s linear infinite;
        display: inline-block;
    }
    footer .title-logo a:hover,
    footer .header-links-list .header-anchor-element:hover{
        color: #ffde59;
    }
    footer .title-logo router-link {
        text-decoration: none;
        color: #ffffff;
    }
    footer .footer-links-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    footer .footer-links-list .footer-link-element .footer-anchor-element {
        font-size: 1.5em;
        color: white;
        text-decoration: none;
    }
    footer .footer-links-list .footer-link-element .footer-anchor-element:hover {
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
        font-size:1.5em;
        width: 10em;
        height: 1.2em;
        border-radius: 0.2em;
    }
=======
    footer
{
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.footer-links-list
{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    gap: 20px;
    padding: 15px 0 15px 50px;
    margin: 0;
    flex-grow: 2.5;
}

.footer-anchor-element
{
    text-decoration: none;
    color: white;
    font-size: xx-large;
}

.footer-anchor-element:hover
{
    color: #ffde59;
}

.footer-middle-section
{
    display: flex;
    color: white;
    font-size: xx-large;
    align-items: center;
    justify-content: center;
    flex-grow: 4;
}

.newsletter-form
{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
    border: none;
    color: #ffde59;
    font-size: xx-large;
    padding-right: 50px;
    flex-grow: 2;
}

.newsletter-form input
{
    width: 10vw;
    height: 4vh;
    font-size: x-large;
    border-radius: 10px;
    padding-left: 5px;
}

>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
</style>