<template>
<div>
  <span class="label">HP:</span>
  <div class="outside-hp-bar">
    <div class="inside-hp-bar" v-bind:style="{
      width: `${hp*100/10}%`,
      background: color
    }"></div>
  </div>
</div>
</template>

<script>
export default {
  props:['hp'],
  computed: {
    color() {
      if (this.hp <= 2) {
        return '#d45';
      } else if (this.hp <= 5) {
        return 'orange';
      } else {
        return 'rgb(100, 171, 116)'
      }
    }
  }
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
  display: inline-block
}

.inside-hp-bar {
  height: 100%;
}
</style>
