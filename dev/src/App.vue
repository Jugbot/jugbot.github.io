<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-row wrap align="center">
          <v-flex xs12 lg4>
            <v-row wrap justify="center">
              <v-flex shrink>
                <v-avatar size="125px" class="mr-3 mb-3">
                  <img
                    class="img-circle elevation-1"
                    src="./assets/avatar.jpg"
                  >
                </v-avatar>
              </v-flex>
              <v-flex shrink>
                <div class="font-weight-light display-3">
                  LUCAS<br>POLLICE
                </div>
              </v-flex>
            </v-row>
            <v-row align="center" justify="space-around">
              <v-btn
                v-for="link in links" :key="link.icon"
                text icon
                :href="link.url" target="_blank"
              >
                <v-icon>fab fa-{{ link.icon }}</v-icon>
              </v-btn>
              <v-btn icon text href="https://github.com/Jugbot/jugbot.github.io" target="_blank">
                <div class="title font-weight-black">
                  &lt;/&gt; 
                </div>
              </v-btn>
            </v-row>
          </v-flex>
          <v-flex xs12 lg8>
            <FakeIDE :height="600" />
          </v-flex>
        </v-row>
      </v-container>
    </v-content>
    <v-footer 
      app
      color="#00000000"
      fixed
    >
      <v-row
        justify="center"
      >
        <v-btn text @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <span v-if="!$vuetify.theme.dark" class="grey--text">Vampire-accessible theme</span>
          <span v-else class="grey--text">Eyeball-searing theme</span>
        </v-btn>
      </v-row>
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
          icon: 'instagram',
          url: 'https://www.instagram.com/jugbot/'
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
