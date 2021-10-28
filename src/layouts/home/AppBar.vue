<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="56"
    >
      <base-img
        :src="require('@/assets/logo_black.png')"
        class="mr-3 d-sm-none"
        contain
        max-width="76"
        width="100%"
      />

      <base-img
        class="mr-3 hidden-xs-only"
        :src="require(`@/assets/logo_${$vuetify.theme.isDark ? 'white' : 'black'}.png`)"
        contain
        max-width="96"
        width="100%"
      />

      <v-spacer />

      <div class="d-flex">
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            :to="item.src"
            :ripple="false"
            class="font-weight-bold btnHover"
            min-width="96"
            text
          >
            {{ $t(item.i18n) }}
          </v-tab>
        </v-tabs>
        <div class="d-flex align-center">
          <v-menu
            transition="slide-y-transition"
            open-on-hover
            bottom
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-btn
                text
                color="title"
                class="btnHover"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>
                  {{ icon.translate }}
                </v-icon>
                <v-icon small>
                  {{ icon.down }}
                </v-icon>
              </v-btn>
            </template>
            <v-list
              nav
              dense
            >
              <v-list-item-group
                v-model="langSelected"
                color="title"
              >
                <v-list-item
                  v-for="(item, i) in languages"
                  :key="i"
                  @click="changeLang(item.lang)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text" />
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
        <!-- <div class="d-flex align-center">
          <v-btn
            text
            to="/login"
            class="btnHover"
            color="title"
          >
            <v-icon>
              {{ icon.login }}
            </v-icon>
          </v-btn>
        </div> -->
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
  import { mdiTranslate, mdiChevronDown, mdiLogin } from '@mdi/js'
  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      icon: {
        translate: mdiTranslate,
        down: mdiChevronDown,
        login: mdiLogin,
      },
      items: [
        {
          name: 'Home',
          i18n: 'home.text',
          src: '/',
        },
        // {
        //   name: 'About Us',
        //   i18n: 'about.text',
        //   src: '/about',
        // },
        {
          name: 'ZCP Network',
          i18n: 'zcp.text',
          src: '/ZCP-Network',
        },
        // {
        //   name: 'Database',
        //   src: '/database',
        // },
        {
          name: 'Podcast',
          i18n: 'podcast.text',
          src: '/podcast',
        },
        // {
        //   name: 'News',
        //   i18n: 'news.text',
        //   src: '/news',
        // },
        {
          name: 'Contact',
          i18n: 'contact.text',
          src: '/contact',
        },
      ],
      langSelected: 0,
      languages: [
        {
          lang: 'en',
          text: 'English',
        },
        {
          lang: 'zh',
          text: '简体中文',
        },
      ],
    }),

    methods: {
      changeLang(lang) {
        this.$i18n.locale = lang
      },
    },
  }
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
  .btnHover:hover
    background: rgba(0, 0, 0, 0.08)
</style>
