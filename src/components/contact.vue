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
                  v-model="name"
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
                  v-model="email"
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
                  v-model="subject"
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
                  v-model="message"
                  name="Message:"
                  label="Message"
                  value=""
                  multi-line
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
            <router-link to='thankyou'>
              <transition name="slide-fade" mode="out-in">
                <v-btn v-show="name && email && subject && message" type="submit" flat dark class="btn--dark-flat-pressed grey darken-1">Send</v-btn>
              </transition>
            </router-link>
        </form>
      </v-container>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
};
</script>

<style lang="css" scoped>
  h3 {
    color: white;
  }
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
