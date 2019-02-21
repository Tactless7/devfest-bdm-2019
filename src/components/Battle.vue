<template>
<div class="root">

  <img class="pokemon-image" src="@/assets/bulbizarre.png">
  <img class="pokemon-image" src="@/assets/salameche_back.png">

</div>
</template>

<style scoped>

.root {
  position: absolute;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
  background: #f8f8f8;
  z-index: 2;
  border:#ddd solid 2px;
  box-shadow: 5px 5px 20px #999;
}

.pokemon-image {
  image-rendering: pixelated;
  width: 35%;
}

</style>