<template>
  <div>
    <HeaderLayout/>
    <RegistrationLayout/>
   <FooterLayout/>
  </div>
</template>


<script>

import HeaderLayout from "@/components/HeaderLayout.vue";
import RegistrationLayout from "@/components/RegistrationLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";



export default {
  name: "AppRegistration",
  components: {
   HeaderLayout,
    RegistrationLayout,
       FooterLayout


  },
};
</script>