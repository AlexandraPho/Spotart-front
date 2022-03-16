<template>
  <div>
<HeaderLayout />
<InformationsUserLayout v-if="user" v-bind:email="user.email" v-bind:nickname="user.nickname" v-bind:name="user.name" v-bind:lastname="user.last_name" v-bind:description="user.description"/>
<FavouriteTitle v-if="artworks"/>
<FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '@/components/template/HeaderLayout.vue'
import FooterLayout from '@/components/template/FooterLayout.vue'
import InformationsUserLayout from '@/components/UserProfile/InformationsUserLayout.vue'
import FavouriteTitle from '@/components/UserProfile/FavouriteTitle.vue'
// we import the service so we can have the datas from the WP API
import UsersService from '@/services/UsersService.js';
export default {
    name: 'UserProfile',
    components: {
    HeaderLayout,
    FooterLayout,
    InformationsUserLayout, 
    FavouriteTitle
    },
    data() {
    return {
          artworks:null,
          user:null
        }
    },
    mounted() {
    UsersService.getUserbyId(this.$route.params.id).then(
    (response) => {
    console.log(response.data);
    this.user = response.data;
    });
    
    }
}
</script>


<style src="@/assets/css/signup.css">
</style>