<template lang="html">
  <v-container fluid>
    <v-tabs :value="2">
      <v-tab-item
        v-for="doc in docs"
        :key="doc.filePath"
      >
        <v-card flat tile style="overflow-y: auto; overflow-x: hidden" :height="height">
          <v-card-text>
            <pre style="white-space: pre-wrap;" v-html="doc.content">
              <!-- injected content highlight.js -->
            </pre>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat tile style="overflow: hidden" :height="height">
          <iframe width="100%" height="100%" style="border:none" src="https://jugbot.github.io/resume/" />
        </v-card>
      </v-tab-item>
      <v-tab
        v-for="doc in docs"
        :key="doc.filePath"
      >
        {{ doc.filePath }}
      </v-tab>
      <v-spacer />
      <v-tab>
        <v-icon size="small" class="px-2" color="light-green">
          fas fa-play
        </v-icon>
        run
      </v-tab>
    </v-tabs>
  </v-container>
</template>

<script>
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-dark.css'

import html from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('html', html);
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('js', javascript);
import css from 'highlight.js/lib/languages/less';
hljs.registerLanguage('css', css);

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
          content: null
        },
        {
          filePath: 'assets/main.css',
          type: 'css',
          content: null
        }
      ]
    }
  },
  mounted() {
    for (let doc of this.docs) {
      fetch('https://jugbot.github.io/resume/' + doc.filePath).then(response => response.text().then((raw) => {
        console.log(hljs.highlight(doc.type, raw))
        doc.content = hljs.highlight(doc.type, raw).value
      }))
    }
  }
}
</script>

<style lang="sass">
.v-tab 
  font-family: monospace, monospace
  text-transform: none !important
</style>
