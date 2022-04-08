<template>
  <div>
<HeaderCopy />
<InformationsUserLayout v-if="user" v-bind:email="user.email" v-bind:nickname="user.nickname" v-bind:name="user.name" v-bind:lastname="user.last_name" v-bind:description="user.description"/>
<FavouriteTitle />
<FooterLayout />
  </div>
</template>

<script>
import HeaderCopy from '@/components/template/HeaderCopy.vue';
import FooterLayout from '@/components/template/FooterLayout.vue';
import InformationsUserLayout from '@/components/UserProfile/InformationsUserLayout.vue'
import FavouriteTitle from '@/components/UserProfile/FavouriteTitle.vue'
// we import the service so we can have the datas from the WP API
import UsersService from '@/services/UsersService.js';
export default {
    name: 'UserProfile',
    components: {
    HeaderCopy,
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