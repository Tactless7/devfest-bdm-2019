<template>
  <div class="message" v-if="displayGreetings">
    <p>{{ greetings }}</p>

    <input
      type="text"
      v-model="firstName"
      v-on:keydown.enter="displayGreetings = false"
    />

    <p v-if="firstName">Ah ! Je me souviens ! Bonjour {{ firstName }}</p>
  </div>
</template>

<script>
export default {
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
.message {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  margin: 20px;
  padding: 20px;
}
</style>
