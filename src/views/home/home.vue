<template>
    <div class="background">
        <!-- <img :src="imgSrc" > -->
    </div>
</template>

<script>
export default {
  data(){
    return {
      imgSrc: require('../../assets/background.jpg')
    }
  }
}
</script>
<style scoped>
.background {
    /* left: 200;
    top: 200;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute; */
}
</style>