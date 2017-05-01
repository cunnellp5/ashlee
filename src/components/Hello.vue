<template>
  <div class="hello">
    <h1 class="text-xs-center">{{ msg }}</h1>
    <div class="mi">
      <v-parallax src="http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.112.899.899/16230558_153781181794043_7338875721789472768_n.jpg?ig_cache_key=MTQ0NTUyNDIzODEyMjY4NjMyMw%3D%3D.2.c"></v-parallax>
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
