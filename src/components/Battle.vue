<template>
<div class="root">

  <div class="enemy">
    <img class="pokemon-image" src="@/assets/bulbizarre.png">
    <div class="pokemon-infos">
      <div> BULBIZARRE </div>
      <PokemonHpZone who="enemy">
        <HpBar v-bind:hp="enemyPokemonHp" />
      </PokemonHpZone>
    </div>
  </div>
  <div class="sacha">
    <img class="pokemon-image" src="@/assets/salameche_back.png">
    <div class="pokemon-infos">
      <div> SALAMECHE </div>
      <PokemonHpZone who="sacha">
        <HpBar v-bind:hp="sachaPokemonHp" />
        <div> {{sachaPokemonHp}}/ 10 </div>
      </PokemonHpZone>
    </div>
  </div>

</div>
</template>

<script>
import HpBar from './HpBar.vue';
import PokemonHpZone from './PokemonHpZone.vue';

export default {
  components: {
    HpBar,
    PokemonHpZone
  },
  computed: {
    enemyPokemonHp() {
      return this.$store.state.enemy.pokemon.hp
    },
    sachaPokemonHp() {
      return this.$store.state.sacha.pokemon.hp
    },
  },
};
</script>

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

.pokemon-infos {
  position: absolute;
  font-size: 180%;
  color: black;
}

.sacha .pokemon-infos {
  top: 40%;
  left: 45%;
  width: 53%;
}

.enemy .pokemon-infos {
  top: 0%;
  left: 5%;
}

.sacha div {
  float: right;
} 
</style>