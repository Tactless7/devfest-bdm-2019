<template>
  <div class="message" v-if="displayGreetings">
    <p>{{ greetings }}</p>

    <input
      ref="name"
      type="text"
      v-model="firstName"
      v-on:keydown.enter="firstNameSubmit()"
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
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    firstNameSubmit() {
      this.displayGreetings = false;
      this.$emit('greetingsFinished');
    },
  },
};
</script>

<style>
.message {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 2;
  margin: 20px;
  padding: 20px;
}
</style>
