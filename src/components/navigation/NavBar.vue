<template>
  <nav>
    <router-link v-if="!name" :to="{ name: 'welcome' }">Home</router-link>
    <router-link v-if="name" :to="{ name: 'logout' }">Logout</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      name: ''
    };
  },
  created() {
    this.name = localStorage.name;
  }
};
</script>

<style scoped></style>
