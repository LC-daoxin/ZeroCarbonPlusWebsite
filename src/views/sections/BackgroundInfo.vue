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
            subtitle="Background Information"
            tag="h2"
            title="Background"
          >
            Climate change and the impact of relevant policy/regulations regarding carbon neutrality bring challenges and opportunities for various stakeholders including enterprises, NGOs and local governments. Diverse demands have thus emerged, requiring tailored solutions for adaptation, transfer and innovation such as
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
                    :title="title"
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
              Currently, however, as the environment changes, regulations evolve, new technologies emerge, and customer behavior shifts, the crux facing both the public and private sector lies in the effective and efficient match between the problem solvers and the issuers seeking the optimal solutions  — and whether the offered proposals could truly work in the end.
            </base-body>
            <base-body
              class="px-12"
              space="5"
            >
              Without reliable navigation, relevant players may be exposed to huge gaps in terms of climate-related risks and opportunities at the cost of wasted investment and invalid communications, ultimately resulting in a more bumpy transition to a low-carbon economy at the state level.
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
            :src="require('@/assets/infoImg-5.jpeg')"
            contain
            max-width="90%"
          />
          <base-img
            class="img-2"
            data-aos="fade-left"
            :src="require('@/assets/infoImg-2.jpeg')"
            contain
            max-width="90%"
          />
          <base-img
            class="img-3"
            data-aos="fade-left"
            :src="require('@/assets/infoImg-1.jpeg')"
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
          'Restructuring the business in fitting the mitigation needs',
        ],
        [
          mdiChartScatterPlotHexbin,
          'Upgrading operation capacity towards a more sustainable end',
        ],
        [
          mdiBasketUnfill,
          'Renewing and breaking the threshold of tech gaps',
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
