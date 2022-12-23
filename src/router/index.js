import { createWebHistory, createRouter } from "vue-router";
import PersonalInfo from '@/views/PersonalInfo.vue';
import Plans from '@/views/Plans.vue';
import AddOns from '@/views/AddOns.vue';
import Summary from '@/views/Summary.vue';
import ThankYouPage from '@/views/ThankYouPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/personalInfo',
  },
  {
    path: '/personalInfo',
    name: 'Personal Info',
    component: PersonalInfo,
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans,
  },
  {
    path: '/add-ons',
    name: 'Add Ons',
    component: AddOns,
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary,
  },
  {
    path: '/thankYouPage',
    name: 'Thank You Page',
    component: ThankYouPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;