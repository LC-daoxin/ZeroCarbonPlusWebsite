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
              <div
                class="d-flex justify-center"
                :style="{ 'background': background }"
              >
                <img
                  :src="imgUrl"
                  height="200"
                >
              </div>
              <!-- <v-img
                content-class="h-img"
                height="240"
                aspect-ratio="1.7"
                :src="imgUrl"
              /> -->
            </router-link>
            <v-img
              v-else
              height="240"
              contain
              :src="imgUrl"
            />
            <v-card-text>
              <v-col
                v-if="title1 || subtitle1"
                :cols="12"
              >
                <base-subtitle
                  v-if="subtitle1"
                  :title="$i18n.locale == 'en' ? subtitle1 : subtitle2"
                  space="1"
                />

                <base-title
                  :title="$i18n.locale == 'en' ? title1 : title2"
                  class="text-uppercase"
                  space="1"
                />

                <base-divider :color="color" />

                <base-body
                  v-if="text1 || $slots.default"
                  :text="$i18n.locale == 'en' ? text1 : text2"
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
      subtitle1: String,
      subtitle2: String,
      background: String,
      text1: String,
      text2: String,
      title1: String,
      title2: String,
      imgUrl: String,
    },
  }
</script>

<style lang="sass" scoped>
.v-card:not(.on-hover)
  margin-top: 3px
</style>
