<template>
  <div class="display">
    <img src="@/assets/pallet_town.png" class="pallet-town" />
    <Sacha />

    <div class="message">
      <p>{{ greetings }}</p>

      <input
        type="text"
        v-model="firstName"
        v-on:keydown.enter="displayGreetings = false"
      />

      <p v-if="firstName">Ah ! Je me souviens ! Bonjour {{ firstName }}</p>
    </div>
  </div>
</template>

<script>
import Sacha from '@/components/Sacha.vue';

export default {
  components: {
    Sacha,
  },
  data() {
    return {
      greetings: 'Hé ! Bonjour, quel est ton nom ?',
      firstName: '',
      displayGreetings: true,
    };
  },
};
</script>

<style>
@font-face {
  font-family: pokemon;
  src: url(/fonts/pokemon-font.woff);
}

.pallet-town {
  width: 800px;
  margin-left: 2px;
  image-rendering: pixelated;
}

.display {
  position: relative;
  display: inline-block;
  font-family: pokemon;
}

.display .message {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  margin: 20px;
  padding: 20px;
}
</style>
