import Vue from 'vue'
import Router from 'vue-router'


// const Test = (resolve) => require(['@/pages/test.vue'], resolve);  //主页面

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'*',
            redirect:'/'
        },

    ]
})