<template>
    <div>
        <HeaderLayout/>
        <RegistrationLayout/>
        <FooterLayout/>
    </div>
</template>

<script>
    import HeaderLayout from "@/components/template/HeaderLayout.vue";
    import FooterLayout from "@/components/template/FooterLayout.vue";
    import RegistrationLayout from "@/components/user/RegistrationLayout.vue";

    export default {
        name: "RegistrationApp",
        components: {
            HeaderLayout,
            RegistrationLayout,
            FooterLayout
        },
    };
</script>

