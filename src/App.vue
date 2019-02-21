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
    <GreetingsMessage v-on:greetingsFinished="startGame()" />
  </div>
</template>

<script>
import Sacha from '@/components/Sacha.vue';
import Scene from '@/components/Scene.vue';
import Grid from '@/components/Grid.vue';
import GreetingsMessage from '@/components/GreetingsMessage.vue';

export default {
  components: {
    Sacha,
    Scene,
    Grid,
    GreetingsMessage,
  },
  data() {
    return {
      sacha: {
        display: false,
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
        alert('Battle!');
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
</style>
