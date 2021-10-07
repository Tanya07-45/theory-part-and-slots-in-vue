<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader />  we can also write this--> 
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
export default {
  components:{
    // 'the-header':TheHeader //this also fine.
   // 'TheHeader':TheHeader
   TheHeader ,BadgeList,UserInfo//this will register this component and we can only use that in this file and this is local component registration.
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>