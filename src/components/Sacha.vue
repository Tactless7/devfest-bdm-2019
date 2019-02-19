<template>
  <div
    v-bind:style="{
      top: `${position.y}px`,
      left: `${position.x}px`,
    }"
  >
    <img v-bind:src="`/img/sacha-${orientation}.png`" />
  </div>
</template>

<script>
export default {
  computed: {
    position() {
      return this.$store.getters.sachaPixelPosition;
    },
    orientation() {
      return this.$store.getters.getOrientation;
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
