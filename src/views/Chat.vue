<template>
  <div>
    <h1>Chat</h1>
    <p>Welcome {{ name }} you can now chat.</p>
    <div class="card">
      <div class="card-content center-align messages" v-chat-scroll>
        <message
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
        ></message>
      </div>
    </div>
    <new-message :name="name"></new-message>
  </div>
</template>

<script>
import NewMessage from '../components/NewMessage';
import Message from '../components/Message';
import messageService from '../services/message';

export default {
  name: 'chat',
  components: { Message, NewMessage },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    messageService.messages().onSnapshot(querySnapshot => {
      const messages = [];
      querySnapshot.forEach(doc => {
        messages.push({
          ...doc.data(),
          id: doc.id
        });
      });

      this.messages = messages;
    });
  }
};
</script>

<style scoped>
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
