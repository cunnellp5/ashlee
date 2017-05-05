<template>
  <div class="hello">
    <div class="main-title">
      <h1 id="colors">
        ASHLEE
      </h1>
      <h1 id="colors">
        SOFIA
      </h1>
      <h3 class="subtitle">

      </h3>
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
h1, h2 {
  font-weight: normal;
  display: block;
  color: white;
  font-size: 10em;
  text-shadow: 8px 8px black;
}
#colors {
  font-size: 40px;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  background: -o-linear-gradient(transparent, transparent);
  /*background: -webkit-linear-gradient(transparent, transparent), url(https://media2.giphy.com/media/vRmxMkZxSnI2c/giphy.gif) repeat;*/
  /*background: -webkit-linear-gradient(transparent, transparent), url(https://media1.giphy.com/media/3o85gd3noLuSkE4Lkc/giphy.gif) repeat;*/
  background: -webkit-linear-gradient(transparent, transparent), url(https://media4.giphy.com/media/l41YcgNSPj6Wy1KyQ/giphy.gif) repeat;
  -webkit-background-clip: text;
  text-shadow: 0px 0px 20px rgba(255,255,255,.35);
  font-weight: normal;
  display: block;
  color: white;
  font-size: 10em;
  /*text-shadow: 8px 8px black;*/
}
</style>
