<template>
    <div class="header-wrapper">
        <choose-city />
        <div class="wrapper py-6">
            <v-layout align-center justify-space-between row class="header-component">
                <div class="header-item logo">
                    <a href="#">
                        <img src="/logo.svg" alt="Ситимобил" >
                    </a>
                </div>
                <div class="header-item phone headline font-weight-medium">
                    <a href="tel:74955005050" class="black--text">+7 (495) 500 50 50</a>
                </div>
                <div class="header-item go-app">
                    <a target="_blank" href="https://itunes.apple.com/app/id579220388">
                        <img src="/appStore.svg" alt="App Store">
                    </a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.citymobil&referrer=mt_click_id%3Dmt-wnl9g1-1559827598-2186467004">
                        <img src="/googlePlay.svg" alt="Google Play">
                    </a>
                </div>
            </v-layout>
        </div>
        <div class="header-tabs grey lighten-3">
            <div class="wrapper">
                <v-layout align-center row justify-space-between>
                    <div class="header-tabs-item">
                        <v-btn color="black" text nuxt depressed to="/" class="text-capitalize pl-0" :ripple="false">Главная</v-btn>
                    </div>
                    <div class="header-tabs-item">
                        <v-menu open-on-hover bottom offset-y text nuxt auto to="/driver" min-width="100">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" color="black" class="text-capitalize" text nuxt to="/driver" :ripple="false">Для водителей</v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                        class="grey lighten-3 py-0"
                                        v-for="(item, index) in items"
                                        :key="index"
                                        @click=""
                                        to="/driver"
                                >
                                    <v-list-item-title class="py-0 text-capitalize">{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <div class="header-tabs-item">
                        <v-btn color="black" text nuxt to="/inspire" class="text-capitalize" :ripple="false">Для партнеров</v-btn>
                    </div>
                    <div class="header-tabs-item">
                        <v-btn color="black" text nuxt to="/inspire" class="text-capitalize" :ripple="false">Корпоративное такси</v-btn>
                    </div>
                    <div class="header-tabs-item">
                        <v-menu open-on-hover bottom offset-y text nuxt auto to="/inspire" origin class="header-tabs-menu">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" color="black" text nuxt to="/inspire" class="text-capitalize pr-0" :ripple="false">Услуги</v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                        v-for="(services, index) in services"
                                        :key="index"
                                        @click=""
                                >
                                    <v-list-item-title class="text-capitalize">{{ services.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-layout>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .go-app a img {
        width: 122px;
        height: 35px;
    }
    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 4;
        background-color: #fff;
    }
    .v-btn:before {
        background-color: #eeeeee;
        transition: none;
    }
    .v-btn--active {
        color: #ff7200!important;
    }
    .v-list {
        padding: 0!important;
    }
</style>

<script>
    import HeaderComponent from '~/components/HeaderComponent.vue'
    import ChooseCity from '~/components/ChooseCity.vue'

    export default {
        components: {
            HeaderComponent,
            ChooseCity
        },
        data: () => ({
            items: [
                { title: 'Классы автомобилей' }
            ],
            services: [
                { title: 'VIP'},
                { title: 'Минивен'},
                { title: 'Бизнес такси'},
                { title: 'Трезвый водитель'}
            ]
        })
    }
</script>
