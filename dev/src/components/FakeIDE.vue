<template lang="html">
  <v-container fluid>
    <v-card style='color: #abb2bf; background: #282c34;'>
      <v-tabs>
        <v-tab-item
          v-for="doc in docs"
          :key="doc.name">
          <v-card flat style="overflow-y: auto; overflow-x: hidden" :height='height'>
            <v-card-text>
              <pre v-html='doc.content' style="white-space: pre-wrap;">
                <!-- injected content highlight.js -->
              </pre>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat style="overflow: hidden" :height='height'>
            <iframe width='100%' height='100%' src="https://docs.google.com/document/d/e/2PACX-1vTx5y_UuRruqoVuxBWsNq3_oVyl9TxlcdJfnB3_3D1EukZyHBY51s7ZsA5NIp0MhK1U-S1r6PTTfH4N/pub?embedded=true"></iframe>
          </v-card>
        </v-tab-item>
        <v-tab
          v-for="doc in docs"
          :key="doc.name">
          {{ doc.name }}.{{ doc.type }}
        </v-tab>
        <v-spacer></v-spacer>
        <v-tab>
          <v-icon size="small" class="px-2" color='light-green'>fas fa-play</v-icon>
          run
        </v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import Resume from '../docs/resume'
import Projects from '../docs/projects'
import Skills from '../docs/skills'
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-dark.css'

import html from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('html', html);
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('js', javascript);
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);

export default {
  name: 'FakeIDE',
  data() {
    return {
      docs: [
        {
          name: 'experience',
          type: 'html',
          content: Resume
        },
        {
          name: 'projects',
          type: 'js',
          content: Projects
        },
        {
          name: 'skills',
          type: 'css',
          content: Skills
        }
      ]
    }
  },
  props: {
    height: Number
  },
  mounted() {
    for (let doc of this.docs) {
      doc.content = hljs.highlight(doc.type, doc.content).value;
    }
  }
}
</script>

<style lang="css">
.v-tabs__div {
  font-family: monospace, monospace;
  text-transform: none !important;
}
</style>
