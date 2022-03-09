<template>
  <div>
<HeaderLayout />
<InformationsUserLayout v-if="user" v-bind:description="user.description" v-bind:nickname="user.name"/>
<FavouriteTitle />
<FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';
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


<style src="@/assets/CSS/signup.css">
</style>
