<template>
  <div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
      <HeaderLayout />
      <FooterLayout />
  </div>
</template>

<script>
    import HeaderLayout from '@/components/HeaderLayout.vue';
    import FooterLayout from '@/components/FooterLayout.vue';

  export default
  {
    name: 'App',
    components: {
        HeaderLayout,
        FooterLayout
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>