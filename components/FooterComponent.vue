<template>
    <div class="footer-component">
        <v-footer
                class="grey lighten-3 body-2">
            <div class="wrapper">
                <v-layout row>
                    <v-layout align-left>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize body-2" text nuxt to="/about" :ripple="false" depressed>
                           О компании
                        </v-btn>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize body-2" text nuxt to="/oferta" :ripple="false" depressed>
                            Публичная оферта
                        </v-btn>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize body-2" text nuxt to="/news" :ripple="false" depressed>
                            Новости
                        </v-btn>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize body-2" text nuxt to="/contacts" :ripple="false" depressed>
                            Контакты
                        </v-btn>
                    </v-layout>
                    <v-layout align-right row>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize" target="_blank" text href="https://vk.com/citymobiltaxi" :ripple="false" depressed>
                            <img src="/vk.svg" alt="Вконтакте">
                        </v-btn>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize" target="_blank" text href="https://www.instagram.com/citymobiltaxi/" :ripple="false" depressed>
                            <img src="/inst.svg" alt="Инстаграм">
                        </v-btn>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize" target="_blank" text href="https://www.facebook.com/citymobiltaxi" :ripple="false" depressed>
                            <img src="/fb.svg" alt="Фейсбук">
                        </v-btn>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize" target="_blank" text href="https://ok.ru/group/58424468176945" :ripple="false" depressed>
                            <img src="/ok.svg" alt="Одноклассники">
                        </v-btn>
                        <v-btn class="my-2 grey--text text--darken-1 text-capitalize" target="_blank" text href="https://twitter.com/citymobiltaxi?lang=ru" :ripple="false" depressed>
                            <img src="/twitter.svg" alt="Твиттер">
                        </v-btn>
                    </v-layout>
                </v-layout>
                <v-col
                        class="grey lighten-3 py-4 text-center grey--text text--darken-1"
                        cols="12">
                    © {{ new Date().getFullYear() }} — Citymobil
                </v-col>
            </div>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent",
        data: () => ({
            links: [
                'Home',
                'About Us',
                'Team',
                'Services',
                'Blog',
                'Contact Us',
            ],
        }),
    }
</script>

<style scoped>
    .footer-component {
        width: 100%;
        position: absolute;
        left: 0;
    }
    .v-btn:before {
        background-color: #eeeeee;
        transition: none;
    }
</style>
