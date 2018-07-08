<template>
  <div class="text">
    <div class="text-header">{{welcomeMsg}}</div>
    You can even use Vue-router <router-link to="/another">like this</router-link>.
  </div>
</template>

<script>
  export default {
    name: 'halloWorld',
    data() {
      return {
        welcomeMsg: 'Welcome to your brand new Vue compatible Sails template.',
      }
    }
  }
</script>

<style scoped>
  .text {
    padding: 20px;
    font-size: 19px;
    font-weight: 300;
    text-align: center;
  }

  .text-header {
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 5px;
  }
</style>
