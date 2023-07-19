// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import WeeklyWorkReport from "@/views/WeeklyWorkReport.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/weekly-work-report",
    component: WeeklyWorkReport,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
