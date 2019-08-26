<template>
    <div>
        <v-toolbar class="choose-city-toolbar" flat height="40">
            <div class="wrapper">
                <v-layout align-center justify-space-between class="wrapper-layout pt-0">
                    <v-toolbar-title color="#000" class="font-weight-regular subtitle-1 mb-5 mr-3">Ваш город:</v-toolbar-title>
                    <v-overflow-btn flat height="40" append-icon="keyboard_arrow_down" color="#ff7200" text :items="items" label="Москва"></v-overflow-btn>
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
    .theme--light.v-overflow-btn:hover .v-input__slot, .theme--light.v-overflow-btn.v-input--is-focused .v-input__slot, .theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot {
        box-shadow: none;
    }
    .v-list-item--active {
        background-color: #fff!important;
    }
    .v-application .primary--text {
        color: #000!important;
    }
</style>
