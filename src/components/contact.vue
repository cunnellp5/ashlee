<template lang="html">
  <div>
  <div class="loader" v-if="loadIt">Loading...</div>
  <h3 v-if="!loadIt">Contact me</h3>
  <v-card v-if="!loadIt" class="secondary elevation-0">
    <v-card-text>
      <v-container fluid>
        <form role="form" @keyup.enter="sendEmail">
          <!-- action="https://getsimpleform.com/messages?form_api_token=1166124d2acf44f12b596ae3be187626" method="post" -->
          <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
            <!-- <input type='hidden' name='redirect_to' value='http://localhost:8080/thankyou'/> -->
            <v-row row>
              <v-col xs4>
                <v-subheader class="grey--text text--lighten-1">Name</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  input="string"
                  required
                  v-model="emailData.name"
                  class="focused"
                  name="name"
                  label="Your name"
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row row>
              <v-col xs4>
                <v-subheader class="grey--text text--lighten-1">Email</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  input="string"
                  required
                  v-model="emailData.email"
                  name="email"
                  label="Your email"
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row row>
              <v-col xs4>
                <v-subheader class="grey--text text--lighten-1">Subject</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  input="string"
                  required
                  v-model="emailData.subject"
                  name="subject"
                  label="Subject heading"
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
              <v-row row>
              <v-col xs4>
                <v-subheader class="grey--text text--lighten-1">Email Message</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  input="string"
                  required
                  v-model="emailData.message"
                  name="message"
                  label="Message"
                  value=""
                  multi-line
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
              <v-btn
                v-on:click.native="sendEmail"
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
import '../../globalstyle.css';

export default {
  data() {
    return {
      emailData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      loadIt: false,
    };
  },
  methods: {
    sendEmail() {
      if (this.emailData.name !== '' && this.emailData.email !== '' && this.emailData.subject !== '' && this.emailData.message !== '') {
        this.loadIt = true;
        axios.post('https://cors-anywhere.herokuapp.com/https://getsimpleform.com/messages?form_api_token=1166124d2acf44f12b596ae3be187626', this.emailData)
        .then((response) => {
          this.emailData = response.data;
          event.preventDefault();
        }).catch((error) => {
          this.$router.replace({ name: 'thankyou' });
          console.log(error.status);
        });
      }
    },
  },
  mounted() {
    delete localStorage.token;
  },
};
</script>

<style lang="css" scoped>
  h3 {
    color: white;
  }
</style>
