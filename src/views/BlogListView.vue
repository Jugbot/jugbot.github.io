<template>
  <v-container class="fill-height justify-center align-start">
    <div class="standard-grid flex-grow-1">
      <v-card v-for="post in blogs" :key="post.path" :to="`blog/${post.path}`" flat border>
        <v-img :src="post.image" aspect-ratio="2" cover></v-img>
        <v-card-item :title="post.title" :subtitle="post.subtitle"></v-card-item>
        <v-card-text>
          <v-chip-group>
            <v-chip v-for="tag in post.tags" :key="tag" density="compact">{{ tag }}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { blogs } from '../blogs'
</script>

<style lang="css" scoped>
.standard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
