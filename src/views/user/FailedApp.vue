<template>
  <div>
    <header-layout />
    <failed-layout />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from "@/components/template/HeaderLayout.vue";
import FailedLayout from "@/components/user/FailedLayout.vue";
import FooterLayout from "@/components/template/FooterLayout.vue";

export default {
  name: "FailedApp",
  components: {
    HeaderLayout,
    FailedLayout,
    FooterLayout,
  },
};
</script>

  