<template>
  <v-sheet
    :style="styles"
    tile
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-sheet>
</template>

<script>
  // Components
  import Measurable from 'vuetify/lib/mixins/measurable'

  export default {
    name: 'BaseSection',
    mixins: [Measurable],
    props: {
      space: {
        type: [Number, String],
        default: 96,
      },
      background: String,
    },

    computed: {
      styles() {
        const space = this.$vuetify.breakpoint.mdAndUp
          ? this.space
          : this.space / 2
        const style = {
          ...this.measurableStyles,
          padding: `${space}px 0`,
        }
        if (this.background) {
          style.background = `url(${this.background}) no-repeat top left`
          style.backgroundSize = '2000px 900px'
        }
        return style
      },
    },
  }
</script>
