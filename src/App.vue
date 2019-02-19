<template>
  <div class="display">
    <Scene />
    <Sacha v-if="sacha.display" v-bind:x="sacha.x" v-bind:y="sacha.y" />
    <GreetingsMessage v-on:greetingsFinished="sacha.display = true" />
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
