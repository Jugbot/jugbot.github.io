<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app color="transparent" class="justify-center">
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
