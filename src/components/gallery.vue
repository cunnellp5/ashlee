<template lang="html">
  <div class="">
    <div class="workme">
      <h1>Gallery</h1>
      <!-- <h1 v-if="loadIt">Loading...</h1> -->
      <div class="flexMe">
        <div v-for="i in images">
            <p> {{ i.description }} </p>
            <img class="" :src="i.image_url" alt="Nature" height="200px" width="200px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    fetchData() {
      this.loadIt = true;
      axios.get('http://localhost:3000/pub/1/gallery')
      .then((response) => {
        for (let i = 0; i < response.data.length; i += 1) {
          this.images.push(response.data[i]);
        }
      });
    },
  },
  mounted() {
    this.fetchData();
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
.flexMe {
  display: flex;
  justify-content: center;
}
</style>
