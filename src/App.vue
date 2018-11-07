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
            <v-btn flat icon href='https://github.com/Jugbot' target="_blank">
              <v-icon>fab fa-github</v-icon>
            </v-btn>
            <v-btn flat icon href='https://www.linkedin.com/in/lucas-pollice/' target="_blank">
              <v-icon>fab fa-linkedin</v-icon>
            </v-btn>
            <v-btn flat icon href='https://www.reddit.com/user/Jugbot' target="_blank">
              <v-icon>fab fa-reddit</v-icon>
            </v-btn>
            <v-btn flat icon href='https://www.deviantart.com/jugbotery' target="_blank">
              <v-icon>fab fa-deviantart</v-icon>
            </v-btn>
            <v-btn flat icon href='https://discordapp.com/users/214328380189966337' target="_blank">
              <v-icon>fab fa-discord</v-icon>
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
          <span v-if='!dark'>Vampire-accessible site</span>
          <span v-else>Eyeball-searing site</span>
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
      title: 'Your Logo',
      posts: [
        {
          title: 'Fusce ullamcorper tellus',
          content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
        },
        {
          title: 'Donec vitae suscipit lectus, a luctus diam.',
          content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
        }
      ]
    }
  }
}
</script>
