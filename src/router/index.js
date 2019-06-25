import Vue from 'vue'
import Router from 'vue-router'


// const Test = (resolve) => require(['@/pages/test.vue'], resolve);  //主页面

Vue.use(Router)

import MainContent from '@/components/MainContent.vue'
import test from '@/pages/test.vue'
import test1 from '@/pages/test1.vue'
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'index',
            component:MainContent,
            redirect:'/test',
            children:[
                {
                    path:'test1',
                    name:'test1',
                    component:test1,
                },
                {
                    path:'test',
                    name:'test',
                    component:test,
                }
            ]
        },

    ]
})