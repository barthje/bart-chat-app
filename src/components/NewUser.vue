<template>
  <div class="card">
    <div class="card-content center-align">
      <h2 class="teal-text">Welcome</h2>
      <form @submit.prevent="enterChat">
        <label for="username">Choose a username</label>
        <input type="text" name="name" v-model="name" required />
        <button class="waves-effect waves-light btn" type="submit">
          Enter chat
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-user',
  data() {
    return {
      name: ''
    };
  },
  methods: {
    enterChat() {
      this.$router.push({ name: 'chat', params: { name: this.name } });
    }
  }
};
</script>

<style scoped></style>
