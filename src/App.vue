<template>
    <f7-app :params="f7params">
        <!-- initial page is specified in routes.js -->
        <f7-view main url="/">
            
        </f7-view>
    </f7-app>
</template>

<script>
import 'framework7/css/framework7.bundle.min.css'
import 'framework7-icons';

import HomePage from '@/pages/HomePage.vue'
// import LoginPage from '@/pages/LoginPage.vue'

export default {
    data() {
        return {
            f7params: {
                routes: [
                    {
                        path: '/',
                        component: HomePage
                    },
                    // {
                    //     path: '/login',
                    //     component: LoginPage
                    // }
                ],
                name: 'My App',
                id: 'com.myapp.test',
                theme: 'ios'
            }
        }
    }
}
</script>