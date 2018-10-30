<template>
    <div class="homeTitle">
          Тесты по веб разработке
    </div>
</template>

<script>
    export default {
        name: "homeTitle"
    }
</script>

<style scoped>
    .homeTitle{
        width: 100vw;
        height: 130px;
        display: flex;
        background-image:url("/src/assets/tittle.jpg") ;
        background-size: cover;
        position: center;
        justify-content: center;
        background-position: center;
        align-items: center;
        font-weight: bold;
        font-size: 30px;
    }
</style>
