<template lang="html">
  <div>
    <v-card>
      <v-toolbar class="secondary elevation-0">
        Add an img and small description here:
      </v-toolbar>

      <v-card class="grey lighten-4 elevation-0" @keyup.enter="add">
        <v-card-text>
          <v-container fluid>
            <v-row row>
              <v-col xs4>
                <v-subheader>image_url:</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  v-model="gallery.image_url"
                  focus
                  name="input-1"
                  label="URL"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row row>
              <v-col xs4>
                <v-subheader>Description</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  v-model="gallery.description"
                  name="input-1"
                  label="Description"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
            v-on:click.native="add"
            class="btn--dark-flat-pressed pink lighten-2"
            >Post it!
          </v-btn>
          </v-container>
        </v-card-text>
      </v-card>
    </v-card>

    <v-btn
    router to='edit'
    class="btn--dark-flat-pressed pink lighten-2"
    >back
    </v-btn>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      gallery: {
        image_url: '',
        description: '',
      },
    };
  },
  methods: {
    add() {
      const payload = localStorage.getItem('token').split('.')[1].replace('-', '+').replace('_', '/');
      const user = JSON.parse(atob(payload));
      if (this.gallery.image_url !== '' && this.gallery.description !== '') {
        const config = { Authorization: `Bearer ${localStorage.getItem('token')}` };
        axios.post(`http://localhost:3000/user/${user.id}/gallery`, this.gallery, { headers: config })
        .catch((error) => {
          console.log(error.status);
        });
        this.$router.replace({ name: 'edit' });
      }
    },
  },
};
</script>

<style lang="css">
</style>
