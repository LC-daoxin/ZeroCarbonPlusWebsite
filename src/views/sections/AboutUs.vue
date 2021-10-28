<template>
  <base-section id="about">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <base-subheading
            size="display-1"
            :title="$t('about.text')"
            space="0"
          />

          <base-title
            class="primary--text"
            :title="$t('home.title')"
            tag="div"
          />

          <base-body space="5">
            {{ $t('home.content1') }}
          </base-body>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <div class="sub-title mb-2">
            <div class="d-flex">
              <base-avatar
                class="mr-5"
                color="primary"
                :icon="icon.cloud"
                outlined
                dark
              />
              <div>
                <base-subheading
                  size="42"
                  :title="$t('zcp.title')"
                  space="0"
                />

                <base-title
                  class="primary--text mb-0"
                  :title="$t('zcp.team')"
                  space="0"
                  tag="div"
                />
              </div>
            </div>
            <router-link :to="{name: 'ZCP-Network'}">
              <v-btn
                class="ml-3"
                elevation="3"
                raised
                rounded
              >
                <v-icon>
                  {{ icon.right }}
                </v-icon>
              </v-btn>
            </router-link>
          </div>
          <base-body
            ref="content1"
            class="sub-content"
            :style="{ 'min-height': minHeight + 'px' }"
          >
            {{ $t('home.content2') }}
          </base-body>
          <v-row class="d-flex">
            <v-col
              v-for="i in 3"
              :key="i"
              cols="12"
            >
              <base-list-item :text="$t(`zcp.point${i}`)" />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="2"
          class="hidden-sm-and-down text-center"
        >
          <v-responsive
            height="calc(100% - 16px)"
            class="mt-2"
          >
            <v-divider vertical />
          </v-responsive>
        </v-col>
        <v-col cols="5">
          <div class="sub-title mb-2">
            <div class="d-flex">
              <base-avatar
                class="mr-5"
                color="primary"
                icon="mdi-headphones"
                outlined
                dark
              />
              <div>
                <base-subheading
                  size="42"
                  :title="$t('podcast.title')"
                  space="0"
                />

                <base-title
                  class="primary--text mb-0"
                  :title="$t('podcast.team')"
                  space="0"
                  tag="div"
                />
              </div>
            </div>
            <router-link :to="{name: 'Podcast'}">
              <v-btn
                class="ml-3"
                elevation="3"
                raised
                rounded
              >
                <v-icon>
                  {{ icon.right }}
                </v-icon>
              </v-btn>
            </router-link>
          </div>
          <base-body
            ref="content2"
            class="sub-content"
            :style="{ 'min-height': minHeight + 'px' }"
          >
            {{ $t('home.content3') }}
          </base-body>
          <v-row class="d-flex">
            <v-col
              v-for="i in 3"
              :key="i"
              cols="12"
            >
              <base-list-item :text="$t(`podcast.point${i}`)" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <base-body class="mt-5">
          {{ $t('home.content4') }}
        </base-body>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import { mdiCloudOutline, mdiArrowRight } from '@mdi/js'
  export default {
    name: 'AboutUs',

    data: () => ({
      icon: {
        cloud: mdiCloudOutline,
        right: mdiArrowRight,
      },
      minHeight: 0,
    }),

    watch: {
      '$i18n.locale'(newValue) {
        console.log(newValue)
        this.setMinHeight()
      },
    },

    mounted() {
      this.setMinHeight()
    },

    methods: {
      setMinHeight() {
        this.minHeight = 0
        this.$nextTick(() => {
          const height1 = this.$refs.content1.$el.offsetHeight
          const height2 = this.$refs.content2.$el.offsetHeight
          this.minHeight = Math.max(height1, height2)
        })
      },
    },
  }
</script>

<style lang="sass" scoped>
.sub-title
  display: flex
  align-items: center
  justify-content: space-between
</style>
