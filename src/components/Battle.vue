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

  <div class="message">

    <div class="move-options" v-if="step === 'ask for next move'">
      <div class="move" v-on:click="selectSachaMove('GRIFFE')"> GRIFFE </div>
      <div class="move" v-on:click="selectSachaMove('FLAMMECHE')"> FLAMMECHE </div>
      <div> - </div>
      <div> - </div>
    </div>

    <div v-if="step === 'display sacha move'">
      SALAMECHE utilise {{ sachaMove }}!
    </div>

    <div v-if="step === 'display enemy ko'">
      BULBIZARRE ennemi est KO!
    </div>

    <div v-if="step === 'display pokemon XP'">
      SALAMECHE a gagné 83 points EXP.!
    </div>

    <div v-if="step === 'display enemy move'">
      BULBIZARRE ennemi utilise {{ enemyMove }}!
  </div>

  </div>

</div>
</template>

<script>
import HpBar from './HpBar.vue';
import PokemonHpZone from './PokemonHpZone.vue';

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
const pick = array => array[Math.floor(Math.random() * array.length)];

export default {
  components: {
    HpBar,
    PokemonHpZone
  },
  data() {
    return {
      sachaMove: '',
      enemyMove: '',
      step: 'ask for next move'
    };
  },
  computed: {
    enemyPokemonHp() {
      return this.$store.state.enemy.pokemon.hp;
    },
    sachaPokemonHp() {
      return this.$store.state.sacha.pokemon.hp;
    },
  },
  watch: {
    async enemyPokemonHp(hp) {
      if (hp === 0) {
        await this.setStepAndWait('display enemy ko');
        await this.setStepAndWait('display pokemon XP');
        this.$store.commit('RESTORE_ENEMY_POKEMON_HP');
        this.$emit('endOfBattle');
      }
    },
    async sachaPokemonHp(hp) {
      if (hp === 0) {
        await this.setStepAndWait('display sacha ko');
        this.$store.commit('RESTORE_SACHA_POKEMON_HP');
        this.$emit('endOfBattle');
      }
    }
  },
  methods: {
    async setStepAndWait(step) {
      this.step = step;
      await delay(500);
    },
    async resolveSachaMove(move) {
      this.sachaMove = move;
      await this.setStepAndWait('display sacha move');
      this.$store.commit('DECREASE_ENEMY_POKEMON_HP', 4);
    },
    async pickEnemyMoveAndResolve() {
      this.enemyMove = pick(['FOUET LIANE', 'CHARGE']);
      await this.setStepAndWait('display enemy move');
      this.$store.commit('DECREASE_SACHA_POKEMON_HP', 3);
    },
    async selectSachaMove(move) {
      await this.resolveSachaMove(move);
      if (this.enemyPokemonHp !== 0) {
        await this.pickEnemyMoveAndResolve();
        this.step = 'ask for next move';
      } 
    }
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

.message {
  font-size: 158%;
  position: absolute;
  width: 90%;
  height: 18%;
  bottom: -15px;
  left: -15px;
  background: #f8f8f8;
  border:black solid 4px;
  border-radius: 10px;
}

.move-options {
  position: absolute;
  width: 60%;
  top: -8px;
  right: 0;
}

.sacha div {
  float: right;
}

.move:hover {
  cursor: pointer;
}

.move:active {
  color: rgb(100, 171, 116);
}

</style>