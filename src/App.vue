<template>
  <div class="display">
    <Scene />
    <Sacha v-if="displaySacha" />
    <GreetingsMessage v-on:greetingsFinished="displaySacha = true" />
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
      displaySacha: false,
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
