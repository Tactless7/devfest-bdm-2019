<template>
<div class="root">

  <div class="enemy">
    <img class="pokemon-image" src="@/assets/bulbizarre.png">
  </div>
  <div class="sacha">
    <img class="pokemon-image" src="@/assets/salameche_back.png">
  </div>

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
  position: absolute;
  width: 35%;
}

.sacha .pokemon-image  {
  left: 4%;
  bottom: 30%;
}

.enemy .pokemon-image {
  right: 3%;
  top: 0;
}

</style>