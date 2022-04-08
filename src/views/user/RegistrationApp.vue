<template>
    <div>
        <HeaderCopy/>
        <RegistrationLayout/>
        <FooterLayout/>
    </div>
</template>

<script>
    import HeaderCopy from "@/components/template/HeaderCopy.vue";
    import FooterLayout from "@/components/template/FooterLayout.vue";
    import RegistrationLayout from "@/components/user/RegistrationLayout.vue";

    export default {
        name: "RegistrationApp",
        components: {
            HeaderCopy,
            RegistrationLayout,
            FooterLayout
        },
    };
</script>