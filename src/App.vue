<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-row align="center">
          <v-flex xs12 lg4 class="pa-3">
            <v-row v-if="$vuetify.breakpoint.lgAndUp" wrap justify="center">
              <v-flex shrink>
                <v-avatar size="125px" class="mr-3 mb-3">
                  <img
                    class="img-circle elevation-1"
                    src="https://github.com/Jugbot.png?size=125">
                </v-avatar>
              </v-flex>
              <v-flex shrink>
                <div class="font-weight-light text-h2">
                  LUCAS<br>POLLICE
                </div>
              </v-flex>
            </v-row>
            <v-row v-else no-gutters align="baseline">
              <v-flex shrink>
                <v-avatar size="64px" class="mr-3 mb-3">
                  <img
                    class="img-circle elevation-1"
                    src="https://github.com/Jugbot.png?size=64">
                </v-avatar>
              </v-flex>
              <v-flex shrink>
                <div class="font-weight-light text-h4">
                  LUCAS POLLICE
                </div>
              </v-flex>
            </v-row>
            <v-row align="center" justify="space-around">
              <v-btn
                v-for="link in links" :key="link.icon"
                text icon
                :href="link.url" target="_blank">
                <v-icon>fab fa-{{ link.icon }}</v-icon>
              </v-btn>
              <v-btn icon text href="https://github.com/Jugbot/jugbot.github.io" target="_blank">
                <div class="text-h6 font-weight-black">
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
      color="transparent"
      class="justify-center">
      <v-btn text @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <span v-if="!$vuetify.theme.dark" class="grey--text">Vampire-accessible theme</span>
        <span v-else class="grey--text">Eyeball-searing theme</span>
      </v-btn>
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
        }
      ]
    }
  }
}
</script>
