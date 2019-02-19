<template>
  <div
    class="display"
    ref="game"
    tabindex="0"
    v-on:keydown.up="sacha.y -= 40"
    v-on:keydown.down="sacha.y += 40"
    v-on:keydown.left="sacha.x -= 40"
    v-on:keydown.right="sacha.x += 40"
  >
    <Scene />
    <Sacha v-if="sacha.display" v-bind:x="sacha.x" v-bind:y="sacha.y" />
    <GreetingsMessage v-on:greetingsFinished="startGame()" />
  </div>
</template>

<script>
import Sacha from '@/components/Sacha.vue';
import Scene from '@/components/Scene.vue';
import GreetingsMessage from '@/components/GreetingsMessage.vue';

export default {
  components: {
    Sacha,
    Scene,
    GreetingsMessage,
  },
  data() {
    return {
      sacha: {
        x: 400,
        y: 150,
        display: false,
      },
    };
  },
  methods: {
    startGame() {
      this.sacha.display = true;
      this.$refs.game.focus();
    },
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
