<script setup lang="ts">
import FakeIDE from '../components/FakeIDE.vue'

const links = [
  {
    icon: 'mdi-github',
    url: 'https://github.com/Jugbot',
    label: 'Github Profile'
  },
  {
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/lucas-pollice/',
    label: 'Linkedin Profile'
  },
  {
    icon: 'mdi-file-code',
    url: 'https://github.com/Jugbot/jugbot.github.io',
    label: 'Website Source'
  }
] as const
</script>

<template>
  <v-container class="fill-height">
    <v-row align="center" class="">
      <v-col cols="12" lg="4" class="pa-3">
        <v-row v-if="$vuetify.display.lgAndUp" wrap justify="center">
          <v-avatar size="125px" class="mr-3 mb-3">
            <img class="img-circle elevation-1" src="https://github.com/Jugbot.png?size=125" />
          </v-avatar>
          <div class="font-weight-light text-h2">LUCAS<br />POLLICE</div>
        </v-row>
        <v-row v-else no-gutters align="center">
          <v-avatar size="64px" class="mr-3 mb-3">
            <img class="img-circle elevation-1" src="https://github.com/Jugbot.png?size=64" />
          </v-avatar>
          <div class="font-weight-light text-h4">LUCAS POLLICE</div>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-tooltip :text="link.label" v-for="link in links" :key="link.icon" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" icon :href="link.url" target="_blank">
                <v-icon :icon="link.icon"></v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </v-row>
      </v-col>
      <v-col cols="12" lg="8">
        <FakeIDE :height="600" />
      </v-col>
    </v-row>
  </v-container>
</template>
