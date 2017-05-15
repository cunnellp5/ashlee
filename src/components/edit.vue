<template lang="html">
  <div class="">
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
              small
              error
              v-on:click.native="del(item)"
              flat dark class="btn--dark-flat-pressed grey darken-0">
                X
            </v-btn>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-divider />
    </v-card>
    <v-btn
      flat
      dark
      router to='add'
      class="btn--dark-flat-pressed pink lighten-2"
      large
      >Add new pic</v-btn>
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
    del(item) {
      const config = { Authorization: `Bearer ${localStorage.getItem('token')}` };
      const index = this.images.indexOf(item);
      axios.delete(`/user/${item.user_id}/gallery/${item.id}`, { headers: config })
        .then(result =>
          console.log(result.data),
          this.images.splice(index, 1),
          console.log(item))
        .catch(error => console.log(error));
    },
    fetchData() {
      this.loadIt = true;
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
  beforeUpdate() {

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
