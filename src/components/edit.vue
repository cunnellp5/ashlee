<template lang="html">
  <v-card>
    <v-toolbar class="secondary elevation-0">
      Current Gallery Images: ( Butt-hole 😎 )
    </v-toolbar>

    <v-list subheader>
      <v-list-item v-for="item in images">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-bind:src="item.image_url"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.description" />
          </v-list-tile-content>
          <v-btn
            v-bind:id="item.id"
            small
            error
            v-on:click.native="del"
            flat dark class="btn--dark-flat-pressed grey darken-0">
              X
          </v-btn>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <v-divider />
  </v-card>
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
    del() {
      console.log(this.item);
      // axios.delete(`http://localhost:3000/user/:id/gallery/${this.item.id}`);
      console.log('success');
    },
    fetchData() {
      this.loadIt = true;
      axios.get('http://localhost:3000/pub/1/gallery')
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
    this.fetchData();
    if (!localStorage.token) {
      this.$router.replace({ name: 'Hello' });
    }
  },
};
</script>

<style lang="css">
</style>
