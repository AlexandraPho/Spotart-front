<template>
    <HeaderLayout />
    <LoginLayout />
    <FooterLayout />
</template>

<script>
    import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import LoginLayout from '@/components/user/LoginLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';

    export default {
        name: "LoginApp",
        components: {
            HeaderLayout,
            LoginLayout,
            FooterLayout
        }
    }

</script>