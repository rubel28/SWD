import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/backend/dashboard/index.vue';
import store from '../store';
import Login from '../views/backend/auth/login';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //Auth
    { path: '/',redirect:'/login' },
    { path: '/login', name: 'Login', component: Login,meta: { layout: 'auth', isGuest: true } },

    //dashboard
    { path: '/dashboard', name: 'Home', component: Home,meta: { requiresAuth: true } },

    //User Manage
    {   path: '/users',
        name: 'users',
        component: () => import('../views/backend/user/list'),
        meta: { requiresAuth: true }
    },
    {   path: '/user/add',
        name: 'user-add',
        component: () => import('../views/backend/user/add'),
        meta: { requiresAuth: true }
    },
    {   path: '/user/login-history',
        name: 'login-history',
        component: () => import('../views/backend/user/user_manage/login_history'),
        meta: { requiresAuth: true }
    },
    // Utility settings
    // country
    {
        path: '/country',
        name: 'country',
        component: () => import('../views/backend/utility/country/list'),
        meta: { requiresAuth: true }
    },
    {
        path: '/country/add',
        name: 'country.add',
        component: () => import('../views/backend/utility/country/add'),
        meta: { requiresAuth: true }
    },
    {
        path: '/country/:id/edit',
        name: 'country.edit',
        component: () => import('../views/backend/utility/country/edit'),
        meta: { requiresAuth: true }
    },
    // province
    {
        path: '/province',
        name: 'province',
        component: () => import('../views/backend/user/list'),
        meta: { requiresAuth: true }
    },
    // City
    {
        path: '/city',
        name: 'city',
        component: () => import('../views/backend/user/list'),
        meta: { requiresAuth: true }
    },

    //Error page
    {
        path:'/error404',
        name: 'notFound',
        component: () => import('../views/backend/error/error404'),
        meta: { layout: 'auth' }
    },
    {
        path:'/:pathMatch(.*)*',
        name: 'error404',
        component: () => import('../views/backend/error/error404'),
        meta: { layout: 'auth' }
    },


];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }
    if (to.meta.requiresAuth && !store.state.login.user.token) {
        //console.log(store.state.user.token);
        next({name:'Login'});
    } else if (store.state.login.user.token && to.meta.isGuest){
        next({name:'Home'});
    }else{
        next(true);
    }
    //next(true)

});

export default router;
