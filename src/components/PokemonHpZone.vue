<template>
<div class="hp-zone" v-bind:class="who">
  <slot></slot>
  <div class="arrow part-1"></div>
  <div class="arrow part-2"></div>
  <div class="arrow part-3"></div>
</div>    
</template>

<script>
export default {
  props: ['who']
}
</script>


<style scoped>
.hp-zone {
  border-bottom: 7px solid black;
  border-radius: 5px;
  margin-top: 10px;
}

.sacha .hp-zone {
  width: 80%;
  float: right;
  margin-right: 32px;
  padding-right: 6px;
  padding-bottom: 5px;
  border-right: 7px solid black;
}

.enemy .hp-zone {
  width: 90%;
  margin-left: 8px;
  padding-left: 15px;
  padding-bottom: 15px;
  border-left: 7px solid black;
}

.arrow {
  background: black;
  width: 10px;
  height: 4px;
  position: absolute;
}

.arrow.part-1 {
  bottom: 0;
}
.arrow.part-2 {
  bottom: 6px;
  width: 17px;
}
.arrow.part-3 {
  bottom: 9px;
}

.sacha .arrow.part-1 {
  left: 9px;
}
.sacha .arrow.part-2 {
  left: 22px;
}
.sacha .arrow.part-3 {
  left: 29px;
}

.enemy .arrow.part-1 {
  right: -7px;
}
.enemy .arrow.part-2 {
  right: 6px;
}
.enemy .arrow.part-3 {
  right: 13px;
}
</style>
