import { createWebHistory, createRouter } from "vue-router";
import mainPage from "@/components/mainPage.vue";
import register from "@/components/register.vue";
import login from "@/components/login.vue";
import helloworld from "@/components/HelloWorld.vue";
import CPU from "@/components/CPU.vue";
import addPD from "@/components/admin/addPD.vue";
import productDetail from "@/components/productDetail.vue";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/helloworld",
    name: "helloworld",
    component: helloworld,
  },
  {
    path: "/CPU",
    name: "CPU",
    component: CPU,
  },
  {
    path: "/addPD",
    name: "addPD",
    component: addPD,
  },
  {
    path: "/productDetail/:id",
    name: "productDetail",
    component: productDetail,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;