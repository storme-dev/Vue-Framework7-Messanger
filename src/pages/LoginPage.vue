<template>
    <f7-page name="login">
        <f7-login-screen-title>Авторизация</f7-login-screen-title>
            <f7-list form>
            <f7-list-input
                label="Логин"
                type="text"
                placeholder="Ваш логин"
                :value="username"
                @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                label="Пароль"
                type="password"
                placeholder="Ваш пароль"
                :value="password"
                @input="password = $event.target.value"
            ></f7-list-input>
            </f7-list>
            <f7-list>
            <f7-list-button>Войти</f7-list-button>
            <f7-block-footer style="text-align:center;">
                (c) Karp Messanger 2020
            </f7-block-footer>
            </f7-list>
    </f7-page>
</template>

<script>
import post from '@/utils/axios.js';

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        signIn() {
            post('/signin', 
            {
                username: this.username,
                password: this.password
            }, 
            (response) => {
                console.log(response);
            });
        }
    }
}
</script>

<style scoped>


</style>