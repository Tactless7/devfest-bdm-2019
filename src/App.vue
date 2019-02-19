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
    <Grid />
    <Sacha v-if="sacha.display" v-bind:x="sacha.x" v-bind:y="sacha.y" />
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
        x: 10 * 40 - 20 + 2,
        y: 4 * 40 - 20,
        display: false,
      },
    };
  },
  methods: {
    startGame() {
      this.sacha.display = true;
      this.$refs.game.focus();
    },
    move(orientation) {
      switch (orientation) {
        case 'up':
          if (this.$store.getters.canWalk(this.sacha.x, this.sacha.y - 40))
            this.sacha.y -= 40;
          break;
        case 'down':
          if (this.$store.getters.canWalk(this.sacha.x, this.sacha.y + 40))
            this.sacha.y += 40;
          break;
        case 'right':
          if (this.$store.getters.canWalk(this.sacha.x + 40, this.sacha.y))
            this.sacha.x += 40;
          break;
        case 'left':
          if (this.$store.getters.canWalk(this.sacha.x - 40, this.sacha.y))
            this.sacha.x -= 40;
          break;
      }
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
