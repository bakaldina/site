<template>
    <v-layout align-center justify-space-between row>
        <div class="header-item logo">
            <a href="#">
                <img
                        src="/logo.svg"
                        alt="Ситимобил"
                        class=""
                >
            </a>
        </div>
        <div class="header-item phone headline font-weight-medium">
            <a href="tel:74955005050" class="black--text">+7 (495) 500 50 50</a>
        </div>
        <div class="header-item app">
            <a target="_blank" href="https://itunes.apple.com/app/id579220388">
                <img
                        src="/appStore.svg"
                        alt="App Store"
                        class=""
                >
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.citymobil&referrer=mt_click_id%3Dmt-wnl9g1-1559827598-2186467004">
                <img
                        src="/googlePlay.svg"
                        alt="Google Play"
                        class=""
                >
            </a>
        </div>
    </v-layout>
</template>

<style>
    .app a img{
        width: 122px;
    }
</style>
