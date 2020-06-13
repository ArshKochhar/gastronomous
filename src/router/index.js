import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Name from "../views/Name.vue";
import Customize from "../views/Customize.vue";
import Stepper from "../components/Stepper.vue";
import Garnishment from "../views/Garnishment.vue";
import Cart from "../views/Cart.vue";
import Thanks from "../views/Thanks.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/name",
    name: "Name",
    component: Name,
  },
  {
    path: "/stepper",
    name: "Stepper",
    component: Stepper,
    props: true,
  },
  {
    path: "/customize",
    name: "Customize",
    component: Customize,
    props: true,
  },
  {
    path: "/garnishment",
    name: "Garnishment",
    component: Garnishment,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    props: true,
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: Thanks,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
