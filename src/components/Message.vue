<template>
  <div>
    <span class="teal-text" data-testid="name">{{ message.name }}</span>
    <span class="grey-text text-darken-3" data-testid="message">
      {{ message.message }}
    </span>
    <span class="grey-text time" data-testid="datetime">{{
      message.datetime | date
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: {
    message: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
