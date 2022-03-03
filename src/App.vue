<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/recipe/:id">ArtistProfile</router-link> |
   <router-link to="/registration">Registration</router-link>
  <router-view/>
  </nav>
</template>

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


</style>
