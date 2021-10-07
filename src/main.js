import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);//they are available globally in this entire vue app.
//if we register everything globally here then it would be very long list
//and it is not obvious where these component meant to be used.
//if all these components are meant to be used in multiple places or some of them only used in few places
//app.component('the-header', TheHeader);//we can add them in any of our component file.//this component really used once
app.component('base-badge', BaseBadge);//because i am using this in multiple parts of the app
app.component('base-card', BaseCard);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
