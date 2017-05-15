<template>
      <div id="app">
          <div class="wrap-banner">
            <v-toolbar class="transparent" id="nav">
              <v-toolbar-title id="links">
                <router-link to='/'><p class="space">Home</p></router-link>
                <router-link to='contact'><p class="space">Contact</p></router-link>
                <router-link to='gallery'><p class="space">Gallery</p></router-link>
              </v-toolbar-title>
            </v-toolbar>
            <div class="main-title">
            <!-- <transition name="slide" mode="out-in"> -->
            <transition name="slide-fade" mode="out-in">
              <router-view></router-view>
            </transition>
            </div>
              <vue-particles
                color="#ffffff"
                :particleOpacity="0.7"
                linesColor="#ffffff"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="5"
                :linesWidth="2"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
              >
              </vue-particles>
        </div>
        <br>
        <v-container fluid="fluid">
          <v-row>
            <v-col xs12>
              <v-card class="secondary red lighten-3">
                <v-card-text>
                  <h3>Actress | Boss</h3>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <br>
        <v-container fluid="fluid">
          <v-row>
            <v-col xs12 md6>
              <v-card class="secondary red lighten-4">
                <v-card-text>
                  <v-parallax height="500" src="http://lorempixel.com/300/800/nature"></v-parallax>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="text" xs12 md6>
              <v-card class="secondary red lighten-3">
                <v-card-text>
                  <h3>About:</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <br>
        <v-container fluid="fluid">
          <v-row>
            <v-col class="text" xs12 md6>
              <v-card class="secondary red lighten-3">
                <v-card-text>
                  <h3>Interests:</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col xs12 md6>
              <v-card class="secondary red lighten-4">
                <v-card-text>
                  <v-parallax height="500" src="http://lorempixel.com/300/700/nature"></v-parallax>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style scoped>
.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
 #nav {
  position: fixed;
  top: 0;
  box-shadow: none;
}
#links{
  display: flex;
  flex-direction: row;
}
.space {
  padding: 1em;
  box-shadow: 0px 5px 3px #EF9A9A;
  border-radius: 50%;
  color: #EF9A9A;
  text-decoration: underline;
}
*, :after, :before {
  box-sizing: border-box;
  font-family: 'Permanent Marker', cursive;
}
html, body {
  height: 100%;
}
body {
  margin: 0;
  background: #34393f;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff4f6;
}
code[class*="language-"],
pre[class*="language-"],
pre,
code {
  font-family: Menlo, Monaco, Andale Mono, Ubuntu Mono, monospace !important;
  font-size: .95em;
  @media (max-width: 767px) {
    font-size: .85em;
  }
}
pre.language-js, pre.language-html {
  max-width: 650px;
  margin: 1rem auto !important;
  background: #292929;
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
}
.npm-code {
  background: #292929;
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
}
h1, h2 {
  font-weight: normal;
  display: block;
  color: white;
  font-size: 10em;
  text-shadow: 8px 8px black;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h3 {
  font-weight: 100;
  font-size: 2rem;
  color: white;
  font-size: 5em;
}
.white {
  color: #ffffff;
}
.teko {
  font-family: 'Teko', sans-serif;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
#particles-js {
  /*background-image: url("./assets/ash.jpg");*/
  background-image: url("http://lorempixel.com/g/1000/1000/nature");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1) brightness(90%);
  /*filter: brightness(35%);*/
}
.wrap-banner {
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  overflow-y: scroll;
}
.main-section {
  max-width: 650px;
  margin: auto;
  padding: 0 1rem;
}
.main-title {
  color: #fff;
  z-index: 999;
  h2 {
    font-size: 7rem;
    font-family: 'Teko', sans-serif;
    text-shadow: 8px 8px #000000;
    text-transform: uppercase;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 3rem;
    }
  }
  p.subtitle {
    font-size: 1.7rem;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
}
.section-title {
  margin: 2rem 0 0 0;
}

  .slide-fade-enter-active {
    transition: all .5s ease;
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
