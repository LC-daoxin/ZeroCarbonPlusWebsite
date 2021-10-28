<template>
  <v-theme-provider dark>
    <section id="hero-alt">
      <!-- :gradient="gradient" -->
      <base-img
        :height="$vuetify.breakpoint.mdAndUp ? 280 : 180"
        :src="src"
        color="#45516b"
        flat
        max-width="100%"
        tile
      >
        <v-row
          v-if="title"
          align="center"
          class="ma-0 fill-height text-center"
          justify="center"
        >
          <v-col cols="12">
            <div class="title-bg">
              <base-heading
                :title="title"
                space="2"
                weight="500"
              />

              <base-divider
                color="primary"
                dense
              />

              <v-breadcrumbs
                :items="items"
                class="justify-center pa-0"
                divider=">"
              />
            </div>
          </v-col>
        </v-row>
      </base-img>
    </section>
  </v-theme-provider>
</template>

<script>
  // Components
  import { HexToRGBA, RGBAtoCSS } from 'vuetify/lib/util/colorUtils'

  export default {
    name: 'SectionHeroAlt',

    metaInfo() {
      return {
        changed: (meta) => {
          const { i18n } = this.$route.meta
          this.title = this.$t(i18n) // meta.titleChunk.toUpperCase()
        },
      }
    },

    provide: {
      heading: { align: 'center' },
    },

    data: () => ({
      title: '',
    }),
    computed: {
      gradient() {
        const color = `${this.$vuetify.theme.themes.light.secondary}CC`
        const overlay = RGBAtoCSS(HexToRGBA(color))
        return `to top, ${overlay}, ${overlay}`
      },
      src() {
        return this.$route.meta.src
      },
      items() {
        return [{ text: this.$t('home.text'), to: '/' }, { text: this.title }]
      },
    },
    watch: {
      '$i18n.locale'(newValue) {
        const { i18n } = this.$route.meta
        this.title = this.$t(i18n)
      },
    },
  }
</script>

<style lang="sass">
#hero-alt
  .v-breadcrumbs__item
    color: #FFFFFF
  .title-bg
    margin: 0 auto
    padding: 20px 0
    width: 500px
    overflow: hidden
    background: linear-gradient(to top, rgba(5, 11, 31, 0.4), rgba(5, 11, 31, 0.4))
</style>
