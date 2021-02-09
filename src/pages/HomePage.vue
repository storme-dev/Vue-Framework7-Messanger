<template>
    <f7-page name="home">
        <f7-navbar :title="tabs[currTab].title" large>
            <f7-subnavbar :inner="false">
                <f7-searchbar
                    ref="searchbar"
                    placeholder="Поиск"
                    disable-button-text="Отмена"
                    search-container=".search-list"
                    :custom-search="true"
                    @click:disable="searchString = ''"
                    :value="searchString"
                    @input="searchString = $event.target.value"
                ></f7-searchbar>
            </f7-subnavbar>
        </f7-navbar>

        <div class="search-list searchbar-found">
            <div class="contacts" v-show="currTab == 0">
                <div class="contact" v-for="(contact, index) in contacts" v-show="contact.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1" :key="`contact-${index}`">
                    <div class="contact__avatar">
                        <img src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg" alt="">
                    </div>
                    <div class="contact__content">
                        <div style="display: flex; flex-direction: column;">
                            <div class="contact__text">
                                <div class="contact__title">{{ contact.name }}</div>
                                <div class="contact__subtitle">был(а) только что</div>
                            </div>
                            <div class="contact__hr"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <f7-toolbar tabbar labels position="bottom">
            <f7-link v-for="(tab, index) in tabs" @click="currTab = index" :key="`tab-${index}`" tab-link :tab-link-active="currTab == index" :text="tab.title" :icon-ios="tab.icon"></f7-link>
        </f7-toolbar>

    </f7-page>
</template>

<script>
export default {
    data() {
        return {
            searchString: '',
            currTab: 0,
            tabs: [
                { title: 'Контакты', icon: 'f7:person_2' },
                { title: 'Чаты', icon: 'f7:chat_bubble' },
                { title: 'Профиль', icon: 'f7:person_circle' },
            ]
        }
    },
    computed: {
        contacts() {
            return this.$store.state.contacts;
        }
    },
    mounted() {
        this.$f7ready(() => {
            console.log('Ready f7');

            console.log(this.$refs.searchbar.f7Searchbar);
            
        });
    }
}
</script>

<style scoped>

/* Navbar */
.navbar__avatar {
    display: flex;
    justify-content: center;
}

.navbar__avatar img {
    width: 90px;
    height: 90px;
    border-radius: 100px;
}

.contacts {
    background: #fff;
}

.contact {
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
}

.contact:active {
    background:#f0f2f5;
}

.contact:hover {
    background:#f0f2f5;
}

.contact__avatar img {
    width: 38px;
    height: 38px;
    border-radius: 100px;
}

.contact__content {
    margin-left: 10px;
    /* display: flex; */
    /* justify-content: space-between; */
    width: 100%;
}  

.contact__text {
    display: flex;
    flex-direction: column;
}

.contact__hr {
    background: rgba(0,0,0,0.2);
    height: 0.3px;
    width: 100%;
    margin-top: 7px;
}

.contact__title {
    font-size: 18px;
    color: #000;
}

.contact__subtitle {
    font-weight: 400;
    color: #afafaf;
    margin-top: -3px;
    font-size: 14px;
}

</style>