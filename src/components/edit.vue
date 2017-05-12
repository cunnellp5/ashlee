<template lang="html">
  <h1>fuck yeah</h1>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    checkToken() {
      if (localStorage.token !== '') {
        console.log('success');
      } else {
        this.$router.replace({ name: '/' });
      }
    },
  },
  mounted() {
    this.checkToken();
  },
};
</script>

<style lang="css">
</style>
