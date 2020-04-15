<template>
  <div class="card">
    <div class="card-content center-align">
      <form @submit.prevent="sendMessage">
        <label for="message">Message</label>
        <input
          type="text"
          name="message"
          v-model="message"
          data-testid="message-input"
          required
        />
        <button class="waves-effect waves-light btn" type="submit">
          Send message
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import messageService from '../services/message';
export default {
  name: 'new-message',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    sendMessage() {
      const message = {
        message: this.message,
        datetime: new Date(),
        name: this.name
      };

      messageService.post(message);

      this.message = '';
    }
  }
};
</script>

<style scoped></style>
