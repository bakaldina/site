<template>
  <v-layout column>
    <div class="index-header">
      <header-component />
      <a target="_blank" href="https://city-mobil.ru/taxiportation/">
        <div class="before back" v-bind:style="{backgroundColor: beforeColor}"></div>
        <header-banner :src="backgroundUrl"></header-banner>
        <div class="after back" v-bind:style="{backgroundColor: afterColor}"></div>
      </a>
    </div>
  </v-layout>
</template>


<script>
    import HeaderComponent from '~/components/HeaderComponent.vue'
    import HeaderBanner from '~/components/HeaderBanner.vue'
    import backgroundUrl from '~/static/banner-driver.png'

    export default {
        data: () => ({
                backgroundUrl,
                beforeColor: '#25cc83',
                afterColor: '#25cc83',
            }),
        components: {
            HeaderComponent,
            HeaderBanner
        }
    }
</script>


<style>
  /*.back {*/
    /*display: block;*/
    /*width: 50%;*/
    /*height: 500px;*/
    /*position: absolute;*/
    /*top: 152px;*/
    /*z-index: 1;*/
  /*}*/
  /*.before {*/
    /*left: 0;*/
  /*}*/
  /*.after {*/
    /*right: 0;*/
  /*}*/
</style>

