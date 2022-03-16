<template>
  <button class="button_delete_fav">Button</button>
</template>

<script>
export default {
name: 'ButtonDeleteFav',
}

</script>

<style scoped>
.button_delete_fav {
  background-color: white;
  color: black;
  border: 2px solid cadetblue; 
  transition-duration: 0.4s;
  }

.button_delete_fav:hover {
  background-color: cadetblue; 
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>