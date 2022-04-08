<template>
    <!--<HeaderLayout />-->
    <HeaderCopy/>
    <LoginLayout />
    <FooterLayout />
</template>

<script>
    //import HeaderLayout from '@/components/template/HeaderLayout.vue';
    import HeaderCopy from '@/components/template/HeaderCopy.vue';
    import LoginLayout from '@/components/user/LoginLayout.vue';
    import FooterLayout from '@/components/template/FooterLayout.vue';

    export default {
        name: "LoginApp",
        components: {
            //HeaderLayout,
            HeaderCopy,
            LoginLayout,
            FooterLayout
        }
    }

</script>