<template lang="html">
  <div class="">
    <div class="loader" v-if="loadIt">Loading...</div>
    <div class="" v-if="!loadIt">
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
import '../../globalstyle.css';

export default {
  data() {
    return {
      images: [],
      loadIt: true,
    };
  },
  methods: {
    fetchData() {
      axios.get('/pub/1/gallery')
      .then((response) => {
        for (let i = 0; i < response.data.length; i += 1) {
          this.images.push(response.data[i]);
        }
      })
      .then(() => {
        this.loadIt = false;
      });
    },
  },
  mounted() {
    delete localStorage.token;
    this.fetchData();
  },
  beforeDestroy() {
    delete this.data;
  },
};
</script>

<style lang="css" scoped>
h1 {
  color: white;
}
.flexMe {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
