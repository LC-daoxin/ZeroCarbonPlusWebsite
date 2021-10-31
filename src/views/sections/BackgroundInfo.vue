<template>
  <base-section id="backgroundInfo">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <base-section-heading
            align="left"
            :subtitle="$t('zcp.subtitle')"
            tag="h2"
            :title="$t('zcp.title1')"
          >
            {{ $t('zcp.content1') }}
          </base-section-heading>

          <v-row>
            <v-col
              v-for="([icon, title], i) in features"
              :key="i"
              class="ml-10"
              cols="12"
              md="12"
            >
              <div class="d-flex align-center">
                <base-avatar
                  :icon="icon"
                  class="mr-6"
                  :size="36"
                  color="primary"
                  dark
                  outlined
                />

                <v-responsive>
                  <base-subtitle
                    :title="$t(title)"
                    size="42"
                    class="text--primary"
                  />
                </v-responsive>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <base-body
              class="px-12 mt-5"
              space="5"
            >
              {{ $t('zcp.content2') }}
            </base-body>
            <base-body
              class="px-12"
              space="5"
            >
              {{ $t('zcp.content3') }}
            </base-body>
          </v-row>
        </v-col>

        <v-col
          class="imgBox"
          cols="12"
          md="4"
        >
          <base-img
            class="img-1"
            data-aos="fade-left"
            :src="require('@/assets/infoImg-5.jpg')"
            contain
            max-width="90%"
          />
          <base-img
            class="img-2"
            data-aos="fade-left"
            :src="require('@/assets/infoImg-2.jpg')"
            contain
            max-width="90%"
          />
          <base-img
            class="img-3"
            data-aos="fade-left"
            :src="require('@/assets/infoImg-1.jpg')"
            contain
            max-width="90%"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import { mdiAtom, mdiChartScatterPlotHexbin, mdiBasketUnfill } from '@mdi/js'
  export default {
    name: 'BackgroundInfo',

    data: () => ({
      features: [
        [
          mdiAtom,
          'zcp.point4',
        ],
        [
          mdiChartScatterPlotHexbin,
          'zcp.point5',
        ],
        [
          mdiBasketUnfill,
          'zcp.point6',
        ],
      ],
    }),
  }
</script>

<style lang="sass" scoped>
.imgBox
  position: relative
  .v-image
    position: absolute
    border-radius: 8px
    box-shadow: 10px 10px 5px #54545461
  .img-1
    z-index: 1
    right: 0
  .img-2
    z-index: 2
    top: 200px
    right: 30px
  .img-3
    z-index: 3
    top: 400px
    right: 60px
</style>
