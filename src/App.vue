<template>
  <div>
    <!-- <TheHeader />  we can also write this--> 
    <the-header></the-header>
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if ="selectedComponent ==='active-goals'"></active-goals>
    <manage-goals v-if ="selectedComponent ==='manage-goals'"></manage-goals> -->
    <keep-alive>
    <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
export default {
  components:{
   TheHeader ,ActiveGoals,ManageGoals//this will register this component and we can only use that in this file and this is local component registration.
  },

  data() {
    return {
      selectedComponent:'active-goals',//this is a html tag name
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
   setSelectedComponents(cmp){
    this.selectedComponent = cmp;
   }
  }
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