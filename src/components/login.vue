<template lang="html">
  <div>
  <v-card class="secondary elevation-0">
    <v-card-text>
      <v-container fluid>
        <form role="form" @keyup.enter="edit">
            <v-row row>
              <v-col xs4>
                <v-subheader class="grey--text text--lighten-1">Email</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  v-model="admin.email"
                  input="string"
                  required
                  class="focused"
                  name="email"
                  label="Email"
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row row>
              <v-col xs4>
                <v-subheader class="grey--text text--lighten-1">Password</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  v-model="admin.password"
                  input="string"
                  required
                  name="password"
                  label="Password"
                  dark
                  type="password"
                ></v-text-field>
              </v-col>
            </v-row>
              <v-btn
                v-on:click.native="edit"
                flat dark class="btn--dark-flat-pressed grey darken-1">
                  Send
              </v-btn>
        </form>
      </v-container>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      admin: {
        email: '',
        password: '',
      },
      loadIt: false,
    };
  },
  methods: {
    edit() {
      if (this.admin.email !== '' && this.admin.password !== '') {
        this.loadIt = true;
        axios.post('http://localhost:3000/login', this.admin)
        .then((response) => {
          localStorage.setItem('token', response.data);
          const payload = localStorage.getItem('token').split('.')[1].replace('-', '+').replace('_', '/');
          const user = JSON.parse(atob(payload));
          console.log(user);
          this.$router.replace({ name: 'edit' });
          console.log('hi');
        }).catch((error) => {
          console.log(error.status);
        });
      }
    },
  },
};
</script>

<style lang="css">
</style>
