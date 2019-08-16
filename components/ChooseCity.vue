<template>
    <div>
        <v-toolbar class="choose-city-toolbar" flat height="40">
            <div class="wrapper">
                <v-layout align-center justify-space-between class="wrapper-layout pt-0">
                    <v-toolbar-title class="font-weight-regular subtitle-1 mb-5 mr-3">Ваш город:</v-toolbar-title>
                    <v-overflow-btn height="40" append-icon="keyboard_arrow_down" text :items="items" label="Москва"></v-overflow-btn>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="mb-5">
                        <v-btn text class="pr-0 text-capitalize font-weight-regular">О компании</v-btn>
                        <v-btn text class="pr-0 text-capitalize font-weight-regular">Контакты</v-btn>
                        <v-btn text class="pr-0 text-capitalize font-weight-regular">Офисы</v-btn>
                    </v-toolbar-items>
                </v-layout>
            </div>
        </v-toolbar>
    <v-divider></v-divider>
    </div>
</template>
<script>
    export default {
        data: () => ({
            items: [
                'Москва', 'Зеленоград', 'Люберцы', 'Химки'
            ]
        })
    }
</script>

<style>
    .choose-city-toolbar .v-toolbar__content {
        padding-top: 0;
    }
    /*.wrapper-layout {*/
        /*height: 53px;*/

    /*}*/
</style>
