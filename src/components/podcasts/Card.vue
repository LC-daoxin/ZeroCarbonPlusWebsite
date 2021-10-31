<template>
  <div>
    <v-sheet
      class="rounded-lg"
      color="white"
    >
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            md="4"
          >
            <base-img
              :src="src"
              height="160px"
              :contain="contain"
              flat
              tile
            >
              <div>
                <v-sheet
                  class="img-tag ma-2 rounded d-inline-flex align-center justify-center"
                  color="amber accent-4"
                  elevation="5"
                  dark
                  tile
                >
                  <span class="text">{{ podcastTypeText }}</span>
                </v-sheet>
                <v-hover v-slot="{ hover }">
                  <v-sheet
                    class="pa-2 play-btn d-inline-flex align-center justify-center"
                    :class="{ 'point': hover }"
                    :elevation="hover ? 5 : 0"
                    :color="hover ? '#1a5f97' : 'primary'"
                    dark
                    tile
                    height="40"
                    width="40"
                    @click="$emit('play', id)"
                  >
                    <v-icon v-text="howl ? howl.playing() ? 'mdi-pause' : icon : icon" />
                  </v-sheet>
                </v-hover>
              </div>
            </base-img>
          </v-col>

          <v-col
            class="pl-0"
            cols="12"
            md="8"
          >
            <div class="card-content">
              <a
                :href="to"
                target="_blank"
                class="d-block no-line"
              >
                <h5 class="card-title">{{ $i18n.locale == 'en' ? title1 : title2 }}</h5>
              </a>
              <p class="card-text mb-0">
                {{ truncatedText }}
              </p>
              <div class="card-footer">
                <div class="footer_left">
                  <v-avatar size="48">
                    <img
                      :src="anchorImg"
                      alt="John"
                    >
                  </v-avatar>
                </div>
                <div class="footer_right">
                  <div class="right_0">
                    {{ $i18n.locale == 'en' ? anchorName1 : anchorName2 }}
                  </div>
                  <div class="right_1 d-flex align-center">
                    <div class="date">
                      {{ date }}
                    </div>
                    <div class="browse d-flex justify-center align-center">
                      {{ previewNum }}
                      <v-icon
                        class="ml-2"
                        size="14"
                      >
                        {{ see }}
                      </v-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
  import { mdiEye } from '@mdi/js'
  export default {
    name: 'PodcastCard',
    props: {
      id: [Number, String],
      category: String,
      comments: [Number, String],
      date: String,
      divider: Boolean,
      contain: Boolean,
      html: String,
      icon: String,
      prominent: Boolean,
      readMore: Boolean,
      podcastType: Number,
      anchorName1: String,
      anchorName2: String,
      anchorImg: String,
      audio: String,
      howl: Object,
      src: String,
      to: String,
      text1: String,
      text2: String,
      title1: String,
      title2: String,
      previewNum: {
        type: Number,
        default: 0,
      },
      truncate: {
        type: [Number, String],
        default: 200,
      },
    },
    data() {
      return {
        see: mdiEye,
      }
    },
    computed: {
      truncatedText() {
        const text = this.$i18n.locale === 'en' ? this.text1 : this.text2
        if (!text) return ''

        // const truncate = Number(this.truncate)
        // console.log(this.$vuetify.breakpoint.name)
        let num = 0
        if (this.$i18n.locale === 'zh') {
          num = 150
        } else {
          num = 200
        }
        return text.length > num ? text.slice(0, num) + '...' : text
      },
      podcastTypeText() {
        const v = this.$i18n.locale
        const s = {
          1: {
            zh: 'COP26 直击格拉斯哥',
            en: 'COP26 Glasgow Live',
          },
          2: {
            zh: '0碳风口已至',
            en: 'Green Employment',
          },
          3: {
            zh: '0碳怎么消费',
            en: 'Green Consumption',
          },
          4: {
            zh: '特辑',
            en: 'Special Issue ',
          },
        }
        return s[this.podcastType][v]
      },
    },
    methods: {},
  }
</script>

<style lang="sass" scoped>
.img-tag
  padding: 2px 5px
  .text
    font-size: 12px
.play-btn
  position: absolute
  right: 0
  bottom: 0
.point
  cursor: pointer
.no-line
  text-decoration: none
.card-content
  display: flex
  height: 100%
  flex-direction: column
  justify-content: space-between
  .card-title
    font-size: 19px
    line-height: 22px
    font-weight: bold
    color: rgba(0,0,0,.84)
    &:hover
      color: #4370f5
  .card-text
    flex: 1 1 auto
    margin-top: 5px
    font-size: 14px
    line-height: 18px
    color: rgba(0,0,0,.6)
  .card-footer
    display: flex
    justify-content: space-between
    .footer_left
      width: 48px
    .footer_right
      flex: 1 1 auto
      padding: 5px 10px
      font-size: 13px
      .right_1
        color: grey
        display: flex
        justify-content: space-between
</style>
