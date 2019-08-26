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
                    <v-tab v-for="(item, i) in items"
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
                    <v-card-text class="black--text px-0">
                        <v-card class="d-flex justify-space-between" flat>
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
                                    <v-card flat class="subtitle-1 pb-3 font-weight-medium">Фиксированная поездка
                                    </v-card>
                                    <v-card flat class="d-flex justify-space-between">
                                        <v-card class="" flat>Стоимость 1 км<br>
                                            Стоимость 1 мин<br>
                                            Платное ожидание
                                        </v-card>
                                        <v-card class="" flat>
                                            {{item.fixCostOneKm}}₽<br>
                                            {{item.fixCostOneMin}}₽<br>
                                            {{item.fixCostPaidWait}}₽/мин
                                        </v-card>
                                    </v-card>
                                </v-card>
                            </v-card>
                            <v-card width="4%" flat></v-card>
                            <v-card width="48%" flat>
                                <v-divider/>
                                <v-card max-width="390" flat class="mx-auto py-5">
                                    <v-card flat class="subtitle-1 pb-3 font-weight-medium">Поездка по таксометру
                                    </v-card>
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
                                    <img class="text-end" src="/meeting.png" height="84" width="80"
                                         alt="Перевозка животного">
                                </div>
                                <div class="text-center">Встреча <br> с табличкой</div>
                                <div class="text-center font-weight-medium">{{item.coastMeet}}₽</div>
                            </v-card>
                        </v-card>
                        <v-row justify="center">
                            <v-expansion-panels
                                    accordion

                                    multiple>
                                <v-expansion-panel
                                        v-for="(item,i) in services"
                                        :key="i"
                                >
                                    <v-divider/>
                                    <v-expansion-panel-header disable-icon-rotate class="px-10 py-3 title" height="55">
                                        {{item.title}}
                                        <template v-slot:actions>
                                            <v-icon class="main-accordion-icon" color="#ff7200">radio_button_checked</v-icon>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-card flat class="d-flex justify-space-between"
                                        >
                                            <v-card class="" flat>
                                                Бесплатное ожидание<br>
                                                Отказ от поездки<br>
                                                Салон для некурящих<br>
                                                Выделенная полоса
                                            </v-card>
                                            <v-card class="" flat>
                                                {{item.freeWait}}мин<br>
                                                {{item.refusalTrip}}₽<br>
                                                {{item.nonSmokers}}₽<br>
                                                {{item.highlightedBand}}₽
                                            </v-card>
                                        </v-card>
                                        <v-card flat class="d-flex justify-space-between" v-for="item in services"
                                        >
                                            <v-card class="" flat>
                                                Доплата к стоимости подачи<br>
                                            </v-card>
                                            <v-card class="" flat>
                                                {{item.surchargeCost}}мин
                                            </v-card>
                                        </v-card>
                                        <v-card flat class="d-flex justify-space-between" v-for="item in services"
                                        >
                                            <v-card class="" flat>
                                               Минимальная стоимость для клиента<br>
                                                Время бесплатного ожидания
                                            </v-card>
                                            <v-card class="" flat>
                                                {{item.minCoastAirport}}мин<br>
                                                {{item.freeWaitAirport}}₽
                                            </v-card>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-row>
                        <v-card flat class="caption py-5">
                            <p class="mb-2">Обращаем внимание, что в праздничные дни тарифы могут меняться исходя из фактической и прогнозируемой ситуации. А именно: действующие коэффициенты других компаний, ситуация на дорогах, соотношение количества заказов к водителям готовым их исполнить.<br>
                            Приблизительная стоимость поездки рассчитывается с учетом выбранного тарифа, пожеланий к поездке, времени в пути и километража, информации о пробках и времени суток. Итоговая стоимость рассчитывается после завершения поездки. Расчет стоимости поездки по таксометру осуществляется в следующих случаях:<br>
                            - Заказ оформлен без указания конечного адреса поездки Клиента;<br>
                            - При изменении адреса доставки Клиента и (или) указания дополнительной остановки (заезда) после оформления Заказа;<br>
                            - При оформлении Заказа на подачу машины на определенное время (отличное от времени «на сейчас»).</p>

                            <p class="mb-2">Стоимость поездки по таксометру складывается из суммы значений, полученных из расчета минимальной стоимости одной минуты, умноженной на время поездки и расчета минимальной стоимости одного километра, умноженной на фактически пройденное расстояние, которое считается таксометром на основе данных GPS.</p>
                            <p>При подаче такси клиенту для выхода предоставляется 3 минут бесплатного ожидания. В стоимость встречи в аэропорту входит 10 мин. бесплатного ожидания. Последующее время ожидания тарифицируется по соответствующему городскому тарифу.</p>
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
                services: [
                    {
                        title: 'Подробней о тарифе',
                        freeWait: '3',
                        refusalTrip: '89',
                        nonSmokers: '0',
                        highlightedBand: '0'
                    },
                    {
                        title: 'Поездка до аэропорта'
                    },
                    {
                        title: 'Поездка из Аэропорта'
                    }
                ]
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

    .theme--light.v-tabs .v-tab:hover::before {
        opacity: 0 !important;
    }

    .theme--light.v-tabs .v-tab--active:hover::before, .theme--light.v-tabs .v-tab--active::before {
        opacity: 0 !important;
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
        color: #fff !important;
    }

    .font-28 {
        font-size: 28px;
    }

    .services-img {
        height: 100px;
    }

    .v-expansion-panel::before {
        box-shadow: none;
    }
    .v-expansion-panel-header--active i {
        color: #7000ff !important;
    }
    .main-accordion-icon {
        position: absolute!important;
        left: -3px;
        top: 16px;
    }
</style>
