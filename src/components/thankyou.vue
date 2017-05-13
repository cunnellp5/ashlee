<template lang="html">
  <div>
    <div class="main-title">
      <div class="workme">
        <h2 id="thanks">
          Sent!
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    delete localStorage.token;
  },
};
</script>

<style lang="css" scoped>
h1, h2 {
  font-weight: normal;
  display: block;
  color: white;
  font-size: 5em;
  text-shadow: 8px 8px black;
}
#thanks {
  font-size: 40px;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  background: -o-linear-gradient(transparent, transparent);
  background: -webkit-linear-gradient(transparent, transparent), url(https://media3.giphy.com/media/XpfAcjOxMDjkQ/giphy.gif) repeat;
  /*background: -webkit-linear-gradient(transparent, transparent), url(https://media.giphy.com/media/xT0GqIQaFSVcZ9Goes/giphy.gif) repeat;*/
  -webkit-background-clip: text;
  text-shadow: 0px 0px 20px rgba(255,255,255,.35);
  font-weight: normal;
  display: block;
  color: white;
  font-size: 10em;
  /*text-shadow: 8px 8px black;*/
}
/*.workme {
  height: 80vh;
  width: 90vw;
}*/
</style>
