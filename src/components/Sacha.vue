<template>
  <div
    v-bind:style="{
      top: `${position.y}px`,
      left: `${position.x}px`,
    }"
  >
    <img
      src="https://github.com/jamescastells/pokemonHTML/raw/master/sprites/down.png"
    />
  </div>
</template>

<script>
export default {
  computed: {
    position() {
      return this.$store.getters.sachaPixelPosition;
    },
  },
};
</script>

<style scoped>
div {
  position: absolute;
  /* top: 50%;
  left: 50%; */
  transform: translate(-50%, -50%);
}
div img {
  height: 40px;
}
</style>
