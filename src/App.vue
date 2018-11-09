<template>
  <v-app :dark='dark'>
    <v-container full-height>
      <v-layout row wrap align-center fill-height>
        <v-flex xs12 md5 lg4>
          <v-layout justify-space-between align-center>
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-1 mr-2"
                  src="https://avatars1.githubusercontent.com/u/5402388?s=400&u=5e2559cade2222895d7f1c096d2d7654127fcfd7&v=4"
                >
              </v-avatar>

              <div class="font-weight-light display-3">LUCAS POLLICE</div>

          </v-layout>
          <v-layout align-center justify-space-around>
            <v-btn flat icon
            v-for='link in links' :key='link.icon'
            :href='link.url' target="_blank">
              <v-icon>fab fa-{{link.icon}}</v-icon>
            </v-btn>
            <v-btn icon flat href='https://github.com/Jugbot/jugbot.github.io' target="_blank">
              <div class="title font-weight-black">
                &lt;/&gt;
              </div>
            </v-btn>
          </v-layout>
        </v-flex>
        <v-flex xs12 md5 offset-md2 lg6>
          <div v-for="post in posts" :key="post.title">
            <v-card class="my-3" hover>
              <v-card-media
                class="white--text"
                height="170px"
                :src="post.imgUrl"
              >
                <v-container fill-height fluid>
                  <v-layout>
                    <v-flex xs12 align-end d-flex>
                      <span class="headline">{{ post.title }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-text>
                {{ post.content }}
              </v-card-text>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer color='#00000000'>
      <v-layout
      justify-center
      row>
        <v-btn flat @click='dark = !dark'>
          <span class='grey--text' v-if='!dark'>Vampire-accessible site</span>
          <span class='grey--text' v-else>Eyeball-searing site</span>
        </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      dark: false,
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
          icon: 'discord',
          url: 'https://discordapp.com/users/214328380189966337'
        }
      ],
      docs: [
        {
          name: 'Experience.html',
          content:
`&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot;&gt;
  &lt;head&gt;
    &lt;title&gt;Resume&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;experience&gt;&lt;/experience&gt;
    &lt;languages&gt;&lt;/languages&gt;
  &lt;/body&gt;
&lt;/html&gt;`
        }
      ]
    }
  }
}
</script>
