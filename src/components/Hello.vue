<template>
  <div class="hello">
    <h1 class="text-xs-center">{{ msg }}</h1>
    <div class="mi">
      <v-parallax height="400" src="https://i.ytimg.com/vi/8QMWkAn35LQ/maxresdefault.jpg"></v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Sm-Ashlee',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mi {
    height: 1000px;
    /*display: flex;
    justify-content: center;*/
  }



</style>
