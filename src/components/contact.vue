<template lang="html">
  <div>
  <h3>Contact me</h3>
  <v-card class="secondary elevation-0">
    <v-card-text>
      <v-container fluid>
        <form action="https://getsimpleform.com/messages?form_api_token=1166124d2acf44f12b596ae3be187626" method="post">
          <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
          <!-- <input type='hidden' name='redirect_to' value='<http://localhost:8080/#/thankyou>' /> -->

            <v-row row>
              <v-col xs4>
                <v-subheader class="grey--text text--lighten-1">Name</v-subheader>
              </v-col>
              <v-col xs8>
                <v-text-field
                  class="focused"
                  name="Name:"
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
                  name="Email:"
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
                  name="Subject"
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
                  name="Message:"
                  label="Message"
                  value=""
                  multi-line
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
            <router-link to='thankyou'>
              <v-btn type="submit" flat dark class="btn--dark-flat-pressed grey darken-1">Send</v-btn>
            </router-link>
        </form>
      </v-container>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
  h3 {
    color: white;
  }
</style>
