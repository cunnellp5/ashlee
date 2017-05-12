<template lang="html">
  <div>
  <v-card class="secondary elevation-0">
    <v-card-text>
      <v-container fluid>
        <form role="form">
          <!-- action="https://getsimpleform.com/messages?form_api_token=1166124d2acf44f12b596ae3be187626" method="post" -->
          <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
            <!-- <input type='hidden' name='redirect_to' value='http://localhost:8080/thankyou'/> -->
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
                v-on:click="admin"
                @keyup.enter="admin"
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
    admin() {
      if (this.admin.email !== '' && this.admin.password !== '') {
        this.loadIt = true;
        axios.post('http://localhost:3000/login', this.admin)
        .then((response) => {
          console.log('hi');
          // set token to window
          this.admin = response.data;
          console.log(response);
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
