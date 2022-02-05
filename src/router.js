import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Measures from "@/views/measures/Measures";
import MeasureDetail from "@/views/measures/MeasureDetail";
import Devices from "@/views/devices/Devices";
import DeviceDetail from "@/views/devices/DeviceDetail";
// lazy-loaded
const Profile = () => import("./views/Profile.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
// const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./views/BoardUser.vue")
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
      path: "/measures",
      component: Measures,
    },
    {
        path: "/measures/:id",
        name: 'MeasureDetail',
        component: MeasureDetail,
        props: true

    },
    {
        path: "/devices",
        component: Devices
    },
    {
        path: "/devices/:id",
        name: 'DeviceDetail',
        component: DeviceDetail,
        props: true
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    // {
    //     path: "/admin",
    //     name: "admin",
    //     // lazy-loaded
    //     component: BoardAdmin,
    // },
    // {
    //     path: "/mod",
    //     name: "moderator",
    //     // lazy-loaded
    //     component: BoardModerator,
    // },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;