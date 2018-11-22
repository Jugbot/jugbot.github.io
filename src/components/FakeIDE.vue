<template lang="html">
  <v-container fluid>
    <v-card style='color: #abb2bf; background: #282c34;'>
      <v-tabs>
        <v-tab-item
          v-for="doc in docs"
          :key="doc.name">
          <v-card flat style="overflow-y: auto; overflow-x: hidden" height='350'>
            <v-card-text>
              <pre v-html='doc.content' style="white-space: pre-wrap;">
                <!-- injected content highlight.js -->
              </pre>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab
          v-for="doc in docs"
          :key="doc.name">
          {{ doc.name }}.{{ doc.type }}
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
a.v-tabs__item--active {

}
</style>
