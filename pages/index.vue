<template>
  <v-layout column>
      <div class="index-header">
          <header-component />
          <div class="header-main">
              <v-carousel :show-arrows="false" :cycle="true" class="header-carousel" hide-delimiter-background>
                  <a target="_blank"
                     v-for="(item,i) in items"
                     :key="i"
                     :href="item.href">
                      <!--<div class="before back" v-bind:style="{backgroundColor: item.beforeColor}"></div>-->
                      <v-carousel-item :src="item.src"></v-carousel-item>
                      <!--<div class="after back" v-bind:style="{backgroundColor: afterColor}"></div>-->
                  </a>
              </v-carousel>
              <tariff-component></tariff-component>
          </div>
          <footer-component></footer-component>
      </div>
  </v-layout>
</template>

<script>
import HeaderComponent from '~/components/HeaderComponent.vue'
import HeaderBanner from '~/components/HeaderBanner.vue'
import TariffComponent from '~/components/TariffComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import bannerMain from '~/static/banner-main.png'
import bannerDobro from '~/static/banner-dobro.jpg'
import bannerAeroportation from '~/static/banner-aeroportation.png'


export default {
    data: () => ({
            items: [
                {
                    src: bannerMain,
                    href: 'https://city-mobil.ru/taxiportation/',
                    // beforeColor: '#7100ff',
                    // afterColor: '#8400fd'
                },
                {
                    src: bannerDobro,
                    href: 'https://dobro.city-mobil.ru'
                },
                {
                    src: bannerAeroportation,
                    href: 'https://taxi.aeroexpress.ru',
                    // beforeColor: '#f32f26',
                    // afterColor: '#6f02ff'
                }
            ]
        }),
    components: {
        HeaderComponent,
        HeaderBanner,
        TariffComponent,
        FooterComponent
    }
}
</script>


<style>
    .back {
        display: block;
        width: 50%;
        height: 500px;
        position: absolute;
        top: 0;
        z-index: 1;
    }
    .before {
        left: 100%;
    }
    .after {
        right: 100%;
    }
    .header-main {
       margin-top: 154px;
        z-index: 3
    }
    .header-carousel  {
        height: 500px;
        width: 2000px;
        margin-left: calc(50% - 1000px);
        z-index: 2;
    }
    .v-carousel {
        overflow: visible;
    }
</style>
