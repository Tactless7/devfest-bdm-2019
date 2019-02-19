<template>
  <div class="grid">
    <div class="row" v-for="y in gridHeight" :key="`row${y}`">
      <div class="square" v-for="x in gridWidth" :key="`square${x}-${y}`">
        {{ y }} - {{ x }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  data() {
    return {
      gridWidth: 20,
      gridHeight: 18,
    };
  },
};
</script>

<style scoped>
.grid {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-left: 2px;
  font-family: 'Trebuchet MS', Arial, sans-serif;
}
.row {
  display: flex;
}
.square {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
}

.square {
  width: 38px;
  height: 38px;
  border: solid black 1px;
}
</style>
