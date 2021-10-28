<template>
  <v-container>
    <v-row justify="space-around">
      <v-hover v-slot="{ hover }">
        <v-card
          class="mx-auto"
          :elevation="hover ? 5 : 3"
          :class="{ 'on-hover': hover }"
        >
          <v-card-text>
            <div>{{ subtitle }}</div>
            <p class="text-h4 text--primary">
              {{ title }}
            </p>
            <v-divider />
            <div class="text--primary">
              {{ text }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="teal accent-4"
              @click="reveal = true"
            >
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="hover"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Origin
                </p>
                <p>{{ text }}</p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-row>
  </v-container>
</template>
<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseDirectionCard',
    mixins: [Heading],
    props: {
      callout: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
      imgUrl: String,
    },
    data: () => ({
      reveal: false,
    }),
  }
</script>

<style lang="scss" scoped>
// .v-card:not(.on-hover) {
//   margin-top: 3px;
// }
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
