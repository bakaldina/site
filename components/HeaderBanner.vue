<template>
    <img class="header-banner" :src="backgroundUrl" alt="Такси">
</template>

<script>
    export default {
        props: ['backgroundUrl'],
        name: "HeaderBanner"
    }
</script>

<style scoped>
    .header-banner  {
        height: 500px;
        top: 167px;
        left: 0;
        position: absolute;
        width: 2000px;
        margin-left: calc(50% - 1000px);
        z-index: 2;
    }
</style>
