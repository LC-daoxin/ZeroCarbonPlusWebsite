<template>
  <v-theme-provider :dark="dark">
    <v-container>
      <v-row justify="space-around">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 10 : 0"
            :class="{ 'on-hover': hover }"
            width="400"
          >
            <router-link
              v-if="to"
              :to="to"
            >
              <v-img
                height="200px"
                :src="imgUrl"
              />
            </router-link>
            <v-img
              v-else
              height="200px"
              :src="imgUrl"
            />
            <v-card-text>
              <v-col
                v-if="title || subtitle"
                :cols="12"
              >
                <base-subtitle
                  v-if="subtitle"
                  :title="subtitle"
                  space="1"
                />

                <base-title
                  :title="title"
                  class="text-uppercase"
                  space="1"
                />

                <base-divider :color="color" />

                <base-body
                  v-if="text || $slots.default"
                  :text="text"
                  space="3"
                >
                  <slot />
                </base-body>
              </v-col>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseDetailsCard',

    mixins: [Heading],

    props: {
      dark: Boolean,
      callout: String,
      color: {
        type: String,
        default: 'primary',
      },
      to: Object,
      icon: String,
      subtitle: String,
      text: String,
      title: String,
      imgUrl: String,
    },
  }
</script>

<style lang="scss" scoped>
.v-card:not(.on-hover) {
  margin-top: 3px;
}
</style>
