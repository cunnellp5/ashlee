<template lang="html">
  <div class="">
    <div class="workme">
      <h1>Gallery</h1>
      <!-- <h1 v-if="loadIt">Loading...</h1> -->
      <ul>
        <li>
          <img class="" src="http://lorempixel.com/200/200/nature" alt="Nature">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // loadIt: false,
    };
  },
  computed: {
    mounted() {
      this.loadIt = true;
      console.log(this.loadIt);
      axios.get('http://localhost:3000/pub/1/gallery')
        .then((response) => {
          console.log(response.data);
          console.log('hi');
        });
    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  color: white;
}
.workme {
  height: 80vh;
  width: 90vw;
}
</style>
