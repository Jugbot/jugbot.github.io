<template lang="html">
  <v-container fluid>
    <v-card>
      <v-tabs v-model="tab">
        <v-tab v-for="(doc, i) in docs" :key="doc.filePath" :value="i">
          {{ doc.filePath }}
        </v-tab>
        <v-spacer />
        <v-tab :value="-1" prepend-icon="mdi-play">
          run
        </v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="(doc, i) in docs" :key="doc.filePath" :value="i">
          <v-card flat tile style="overflow-y: auto; overflow-x: hidden" :height="height">
            <v-card-text>
              <pre style="white-space: pre-wrap" v-html="doc.content" />
            </v-card-text>
          </v-card>
        </v-tabs-window-item>
        <v-tabs-window-item :value="-1">
          <v-card flat tile style="overflow: hidden" :height="height">
            <v-btn
              color="primary"
              size="small"
              position="absolute"
              location="top right"
              class="ma-4"
              @click="($refs.resume as any).contentWindow.print()"
            >
              Print
            </v-btn>
            <iframe
              ref="resume"
              width="100%"
              height="100%"
              style="border: none"
              src="https://jugbot.github.io/resume/"
            />
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.min.css'

import html from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', html)
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('js', javascript)
import css from 'highlight.js/lib/languages/less'
hljs.registerLanguage('css', css)

export default {
  name: 'FakeIDE',
  props: {
    height: {
      type: Number,
      default: 600
    }
  },
  data() {
    return {
      docs: [
        {
          filePath: 'index.html',
          type: 'html',
          content: null as string | null
        },
        {
          filePath: 'assets/main.css',
          type: 'css',
          content: null as string | null
        }
      ],
      tab: 2
    }
  },
  mounted() {
    for (let doc of this.docs) {
      fetch('https://jugbot.github.io/resume/' + doc.filePath).then((response) =>
        response.text().then((raw) => {
          doc.content = hljs.highlight(raw, { language: doc.type }).value
        })
      )
    }
  }
}
</script>

<style lang="sass">
.v-tab
  font-family: monospace, monospace
  text-transform: none !important
</style>
