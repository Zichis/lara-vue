require("./bootstrap");

import Vue from "vue";
window.Vue = require("vue");
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./App.vue";
import Home from "./views/Home.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
    ],
});

const app = new Vue({
    el: "#app",
    components: { App },
    router,
});
