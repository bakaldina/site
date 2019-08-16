<template>
    <div class="wrapper tariff-component">
        <v-toolbar flat>
            <template v-slot:extension>
                <v-tabs
                        v-model="tab"
                        background-color="grey lighten-3"
                        grow
                        class="tariff-tabs"
                >
                    <v-tabs-slider color="#ff7200"></v-tabs-slider>
                    <v-tab  v-for="(item, i) in items"
                            :key="i"
                            class="text-capitalize ml-0 black--text"
                            :ripple="false">
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
            <v-tab-item
                    v-for="(item, i) in items"
                    :key="i"
            >
                <v-card flat>
                    <v-card-text class="black--text">
                        <v-card  class="d-inline-flex pa-2"
                                 flat
                        >
                            <div>
                                <div class="headline pb-3">Тариф «{{item.tariffName}}»</div>
                                <div class="title font-weight-regular">
                                    <p>Минимальная стоимость <br>
                                        (включено {{item.time}} мин и {{item.distance}} км)</p>
                                </div>
                            </div>
                            <div class="display-2 pt-12 pl-3">{{item.cost}}₽</div>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    export default {
        name: "TariffComponent",
        data() {
            return {
                tab: null,
                items: [
                    {
                        title: 'Эконом',
                        tariffName: 'Эконом',
                        time: '2',
                        distance: '1',
                        cost: '89'
                    },
                    {
                        title: 'Стандарт',
                        tariffName: 'Стандарт',
                        time: '6',
                        distance: '0',
                        cost: '139'
                    },
                    {
                        title: 'Комфорт',
                        tariffName: 'Комфорт',
                        time: '4',
                        distance: '4',
                        cost: '179'
                    },
                    {
                        title: 'Комфорт +',
                        tariffName: 'Комфорт +',
                        time: '4',
                        distance: '4',
                        cost: '239'
                    },
                    {
                        title: 'Бизнес',
                        tariffName: 'Бизнес',
                        time: '4',
                        distance: '2',
                        cost: '319'
                    },
                    {
                        title: 'Минивен',
                        tariffName: 'Минивен',
                        time: '',
                        distance: '',
                        cost: ''
                    }
                ],
            }
        }
    }
</script>

<style scoped>
.tariff-tabs {
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    height: 40px;
}
.v-tab:before {
    background-color: #eeeeee;
}
.v-application .primary--text {
    color: #000!important;
    caret-color: #000!important;
}
.theme--light.v-tabs .v-tab:hover::before {
    opacity: 0!important;
}
.theme--light.v-tabs .v-tab--active:hover::before, .theme--light.v-tabs .v-tab--active::before {
    opacity: 0!important;
}
.tariff-component .v-tabs-slider {
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    height: 40px;
    margin-top: -38px
}
.tariff-component .v-tabs-slider:before {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    top: -34px;
    left: 7px;
    background-image: url("../static/check.svg");
}
.text-capitalize.ml-0.v-tab.v-tab--active {
    color: #fff!important;
}
</style>
