<template>
    <footer>
        <ul class="footer-links-list">
            <li class="footer-link-element" v-for="footerLink in footerLinks" :key="footerLink.name">
                <router-link class="footer-anchor-element" :to="footerLink.link">{{ footerLink.name }}</router-link>
            </li>
        </ul>
        <div class="footer-middle-section">
            <h1 class="title-logo">Spot Art</h1>
            <!-- <ul class="icons-list">
                <li v-for="socialMediaLink in SocialMediaLinks" :key="socialMediaLink.name">
                    <router-link class="icon-element" :to="socialMediaLink.link" hrel="pinterest-icon">
                        <i class="'lni lni-' + {{ socialMediaLink.name }}"></i>
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

</style>