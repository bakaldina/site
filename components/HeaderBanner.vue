<template>
    <main class="header-banner">
        <div class="header-banner-item"></div>
    </main>
</template>

<script>
    export default {
        name: "HeaderBaner"
    }
</script>

<style scoped>
    .header-banner-item {
        background-image: url('~static/banner-1.png');
        background-size: contain;
        width: 100%;
        height: 500px;
    }
    .header-banner {
        margin-top: 128px;
    }
</style>
