<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="72"
    >
      {{ $vuetify.breakpoint.name }}
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

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
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
  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      items: [
        'Home',
        'About Us',
        'Marketing',
        'Gallery',
        'Pricing',
        'News',
        'Contact',
      ],
    }),
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
</style>
