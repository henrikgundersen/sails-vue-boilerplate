<template>
  <div class="text">
    <div class="text-header">You can also use Sails build in ejs-templating like you normally would</div>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
  export default {
    name: 'another',
    data() {
      return {}
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
