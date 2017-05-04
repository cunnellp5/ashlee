<template lang="html">
  <div>
  <h3>Contact me</h3>
  <v-card class="secondary elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-row row>
          <v-col xs4>
            <v-subheader class="grey--text text--lighten-1">Name</v-subheader>
          </v-col>
          <v-col xs8>
            <v-text-field
              class="focused"
              name="input-2"
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
              name="input-3"
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
              name="input-2"
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
              name="input-7-2"
              label="Message"
              value=""
              multi-line
              dark
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- <v-row row>
          <v-col xs4>
            <v-subheader class="grey--text text--lighten-1">Message</v-subheader>
          </v-col>
          <v-col xs8>
            <v-text-field
              name="input-3"
              label="Text"
              dark
            ></v-text-field>
          </v-col>
        </v-row> -->
        <v-btn flat dark class="btn--dark-flat-pressed grey darken-1">Send</v-btn>
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
