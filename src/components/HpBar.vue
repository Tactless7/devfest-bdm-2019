<template>
<div>
  <span class="label">HP:</span>
  <div class="outside-hp-bar">
    <div class="inside-hp-bar" v-bind:style="{
      width: `${hp*100/10}%`
    }"></div>
  </div>
</div>
</template>

<script>
export default {
  props:['hp']
}
</script>

<style scoped>
.label {
  font-size: 50%;
  font-weight: 900;
}

.outside-hp-bar {
  width: 160px;
  height: 7px;
  border: black solid 4px;
  border-radius: 5px;
  display: inline-block;
}

.inside-hp-bar {
  height: 100%;
  background: rgb(100, 171, 116);
}
</style>
