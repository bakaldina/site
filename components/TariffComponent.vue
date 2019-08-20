<template>
    <div class="wrapper tariff-component">
        <v-toolbar flat>
            <template v-slot:extension>
                <v-tabs
                        v-model="tab"
                        background-color="grey lighten-3"
                        grow
                        class="tariff-tabs">
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
                    :key="i">
                <v-card flat>
                    <v-card-text class="black--text">
                        <v-card  class="d-flex justify-space-between" flat>
                            <v-card width="50%" class="align-self-center" flat>
                                <v-card flat class="d-flex justify-space-between mx-auto" max-width="390">
                                    <v-card flat>
                                        <v-card flat class="headline pb-3">Тариф «{{item.tariffName}}»</v-card>
                                        <v-card flat class="title font-weight-regular">
                                            Минимальная стоимость <br>
                                                (включено {{item.time}} мин и {{item.distance}} км)
                                        </v-card>
                                    </v-card>
                                    <v-card flat class="display-2 align-self-center pt-12">{{item.cost}}₽</v-card>
                                </v-card>
                            </v-card>
                            <v-card flat width="50%">
                                <img :src="item.srcCar" height="174" max-width="525" alt="Эконом">
                            </v-card>
                        </v-card>
                        <v-card class="d-flex justify-space-between py-5" flat>
                            <v-card width="48%" flat>
                                <v-divider/>
                                <v-card max-width="390" flat class="mx-auto py-5">
                                    <v-card flat class="subtitle-1 pb-3 font-weight-medium">Фиксированная поездка</v-card >
                                    <v-card flat class="d-flex justify-space-between">
                                        <v-card class="" flat>Стоимость 1 км<br>
                                            Стоимость 1 мин<br>
                                            Платное ожидание
                                        </v-card>
                                        <v-card class="" flat>
                                            {{item.fixCostOneKm}}₽<br>
                                            {{item.fixCostOneMin}}₽<br>
                                            {{item.fixCostPaidWait}}₽/мин
                                        </v-card >
                                    </v-card >
                                </v-card>
                            </v-card>
                            <v-card width="4%" flat></v-card>
                            <v-card width="48%" flat>
                                <v-divider/>
                                <v-card max-width="390" flat class="mx-auto py-5">
                                    <v-card flat class="subtitle-1 pb-3 font-weight-medium">Поездка по таксометру</v-card>
                                    <v-card flat class="d-flex justify-space-between">
                                        <v-card class="" flat>Стоимость 1 км<br>
                                            Стоимость 1 мин<br>
                                            Платное ожидание
                                        </v-card>
                                        <v-card class="" flat>
                                            {{item.taxCostOneKm}}₽<br>
                                            {{item.taxCostOneMin}}₽<br>
                                            {{item.taxCostPaidWait}}₽/мин
                                        </v-card>
                                    </v-card>
                                </v-card>
                            </v-card>
                        </v-card>
                        <div class="font-28 font-weight-medium text-center py-1">Дополнительные услуги</div>
                        <v-card class="d-flex justify-space-around py-10" flat>
                            <v-card flat>
                                <div class="services-img">
                                    <img class="text-end" src="/child.png" height="93" width="82" alt="Детское кресло">
                                </div>
                                <div class="text-center">Детское кресло <br>или бустер</div>
                                <div class="text-center font-weight-medium">{{item.coastChild}}₽</div>
                            </v-card>
                            <v-card flat>
                                <div class="services-img">
                                    <img class="text-end" src="/baggage.png" height="73" width="106" alt="Багаж">
                                </div>
                                <div class="text-center">Габаритный <br> багаж</div>
                                <div class="text-center font-weight-medium">{{item.coastBaggage}}₽</div>
                            </v-card>
                            <v-card flat>
                                <div class="services-img">
                                    <img class="text-end" src="/animal.png" height="82" width="82" alt="Багаж">
                                </div>
                                <div class="text-center">Перевозка <br>животного</div>
                                <div class="text-center font-weight-medium">{{item.coastBaggage}}₽</div>
                            </v-card>
                            <v-card flat>
                                <div class="services-img">
                                    <img class="text-end" src="/meeting.png" height="84" width="80" alt="Перевозка животного">
                                </div>
                                <div class="text-center">Встреча <br> с табличкой</div>
                                <div class="text-center font-weight-medium">{{item.coastMeet}}₽</div>
                            </v-card>
                        </v-card>
                        <v-row flat justify="center">
                            <v-expansion-panels accordion>
                                <v-expansion-panel
                                        v-for="(item,i) in 5"
                                        :key="i"
                                >
                                    <v-expansion-panel-header disable-icon-rotate>
                                        <template v-slot:actions>
                                            <v-icon color="violet">radio_button_checked</v-icon>
                                        </template>
                                        <!--<template>-->
                                            <!--<v-icon color="#ff7200">radio_button_checked</v-icon>-->
                                        <!--</template>-->
                                        Item
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                    </v-card-text >
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
                        cost: '89',
                        srcCar: '/ekonom-car.png',
                        fixCostOneKm: '9',
                        fixCostOneMin: '8',
                        fixCostPaidWait: '8',
                        taxCostOneKm: '9',
                        taxCostOneMin: '9',
                        taxCostPaidWait: '9',
                        coastChild: '100',
                        coastBaggage: '200',
                        coastAnimal: '200',
                        coastMeet: '100'

                    },
                    {
                        title: 'Стандарт',
                        tariffName: 'Стандарт',
                        time: '6',
                        distance: '0',
                        cost: '139',
                        srcCar: '/ekonom-car.png',
                        fixCostOneKm: '9',
                        fixCostOneMin: '8',
                        fixCostPaidWait: '8',
                        taxCostOneKm: '9',
                        taxCostOneMin: '9',
                        taxCostPaidWait: '9',
                    },
                    {
                        title: 'Комфорт',
                        tariffName: 'Комфорт',
                        time: '4',
                        distance: '4',
                        cost: '179',
                        srcCar: '/ekonom-car.png',
                        fixCostOneKm: '9',
                        fixCostOneMin: '8',
                        fixCostPaidWait: '8',
                        taxCostOneKm: '9',
                        taxCostOneMin: '9',
                        taxCostPaidWait: '9'
                    },
                    {
                        title: 'Комфорт +',
                        tariffName: 'Комфорт +',
                        time: '4',
                        distance: '4',
                        cost: '239',
                        srcCar: '/ekonom-car.png',
                        fixCostOneKm: '9',
                        fixCostOneMin: '8',
                        fixCostPaidWait: '8',
                        taxCostOneKm: '9',
                        taxCostOneMin: '9',
                        taxCostPaidWait: '9'
                    },
                    {
                        title: 'Бизнес',
                        tariffName: 'Бизнес',
                        time: '4',
                        distance: '2',
                        cost: '319',
                        srcCar: '/business-car.png',
                        fixCostOneKm: '9',
                        fixCostOneMin: '8',
                        fixCostPaidWait: '8',
                        taxCostOneKm: '9',
                        taxCostOneMin: '9',
                        taxCostPaidWait: '9'
                    },
                    {
                        title: 'Минивен',
                        tariffName: 'Минивен',
                        time: '',
                        distance: '',
                        cost: '',
                        fixCostOneKm: '9',
                        fixCostOneMin: '8',
                        fixCostPaidWait: '8',
                        taxCostOneKm: '9',
                        taxCostOneMin: '9',
                        taxCostPaidWait: '9'
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
.font-28 {
    font-size: 28px;
}
    .services-img {
        height: 100px;
    }
</style>
