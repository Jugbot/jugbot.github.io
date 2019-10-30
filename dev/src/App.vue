<template>
  <v-app :dark='dark'>
    <v-container full-height>
      <v-layout row wrap align-center fill-height>
        <v-flex xs12 lg4>
          <v-layout justify-space-between align-center>
          <v-flex>
              <v-avatar size="125px" class='mr-3'>
                <img
                  class="img-circle elevation-1"
                  src="./assets/avatar.jpg">
              </v-avatar>
            </v-flex>
            <v-flex>
              <div class="font-weight-light display-3">LUCAS POLLICE</div>
            </v-flex>
          </v-layout>
          <v-layout align-center justify-space-around>
            <v-btn text icon
            v-for='link in links' :key='link.icon'
            :href='link.url' target="_blank">
              <v-icon>fab fa-{{link.icon}}</v-icon>
            </v-btn>
            <v-btn icon text href='https://github.com/Jugbot/jugbot.github.io' target="_blank">
              <div class="title font-weight-black">
                &lt;/&gt;
              </div>
            </v-btn>
          </v-layout>
        </v-flex>
        <v-flex xs12 lg8>
          <FakeIDE :height='600'></FakeIDE>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer color='#00000000'
      fixed>
      <v-layout
      justify-center
      row>
        <v-btn text @click='dark = !dark'>
          <span class='grey--text' v-if='!dark'>Vampire-accessible theme</span>
          <span class='grey--text' v-else>Eyeball-searing theme</span>
        </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>


<script>
import FakeIDE from './components/FakeIDE.vue'

export default {
  name: 'App',
  components: {
      FakeIDE
  },
  data () {
    return {
      dark: true,
      links: [
        {
          icon: 'github',
          url: 'https://github.com/Jugbot'
        },
        {
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/lucas-pollice/'
        },
        {
          icon: 'reddit',
          url: 'https://www.reddit.com/user/Jugbot'
        },
        {
          icon: 'deviantart',
          url: 'https://www.deviantart.com/jugbotery'
        },
        {
          icon: 'discord',
          url: 'https://discordapp.com/users/214328380189966337'
        }
      ]
    }
  }
}
</script>
