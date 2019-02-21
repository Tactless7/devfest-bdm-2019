<template>
  <div
    class="display"
    ref="game"
    tabindex="0"
    v-on:keydown.up="move('up')"
    v-on:keydown.down="move('down')"
    v-on:keydown.left="move('left')"
    v-on:keydown.right="move('right')"
  >
    <Scene />
    <Sacha v-if="sacha.display" />
    <div class="scene-shadow" v-if="play.mode === 'battle'">
      <Battle />
    </div>
    <GreetingsMessage v-on:greetingsFinished="startGame()" />
  </div>
</template>

<script>
import Sacha from '@/components/Sacha.vue';
import Scene from '@/components/Scene.vue';
import Grid from '@/components/Grid.vue';
import GreetingsMessage from '@/components/GreetingsMessage.vue';
import Battle from '@/components/Battle.vue';

export default {
  components: {
    Sacha,
    Scene,
    Grid,
    GreetingsMessage,
    Battle,
  },
  data() {
    return {
      sacha: {
        display: false,
      },
      play: {
        mode: 'move'
      },
    };
  },
  computed: {
    typeOfCurrentSquare() {
      return this.$store.getters.typeOfCurrentSquare;
    }
  },
  watch: {
    typeOfCurrentSquare(type) {
      if (type === 'grass') {
        this.play.mode = 'battle';
      }
    }
  },
  methods: {
    startGame() {
      this.sacha.display = true;
      this.$refs.game.focus();
    },
    move(orientation) {
      this.$store.dispatch('moveSacha', orientation);
    },
  },
  created() {
    this.$store.dispatch('getEnvironment');
  },
};
</script>

<style>
@font-face {
  font-family: pokemon;
  src: url(/fonts/pokemon-font.woff);
}

.display {
  position: relative;
  display: inline-block;
  font-family: pokemon;
}

.scene-shadow {
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
} 
</style>
