<template>
  <div>
    <img :src="`img/${map.name}.png`" :class="map.name" />
  </div>
</template>

<script>
export default {
  computed:{
    map(){
      return this.$store.getters.getMap;
    }
  }
};
</script>

<style scoped>
.pallet_town {
  width: 800px;
  margin-left: 2px;
  image-rendering: pixelated;
}
.red_house{
  width: 320px;
  margin-left: 3px;
  margin-top: 1px;
  image-rendering: pixelated;
}
.red_bedroom{
  width: 320px;
  margin-left: 3px;
  margin-top: 1px;
  image-rendering: pixelated;
}
</style>
