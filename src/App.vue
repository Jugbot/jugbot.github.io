<template>
  <v-app>
    <v-app-bar justify="centered" density="compact" flat color="transparent" sticky>
      <template v-slot:extension>
        <v-spacer />
        <v-card class="ma-3" flat border>
          <v-tabs mobile-breakpoint="xs" bg-color="surface">
            <v-tab to="/">Home</v-tab>
            <v-tab disabled to="/portfolio">Portfolio</v-tab>
            <v-tab disabled to="/blog">Blog</v-tab>
          </v-tabs>
        </v-card>
        <v-spacer />
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app color="transparent" class="justify-center" absolute>
      <v-btn variant="text" @click="toggleTheme">
        <span v-if="!$vuetify.theme.current.dark" class="text-grey">Vampire-accessible theme</span>
        <span v-else class="text-grey">Eyeball-searing theme</span>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
