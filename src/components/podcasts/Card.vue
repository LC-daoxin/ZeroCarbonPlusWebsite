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
              flat
              tile
            >
              <div>
                <v-sheet
                  class="img-tag ma-2 rounded d-inline-flex align-center justify-center"
                  color="amber accent-4"
                  dark
                  tile
                >
                  <span class="text">{{ podcastTypeText }}</span>
                </v-sheet>
                <v-sheet
                  class="pa-2 play-btn d-inline-flex align-center justify-center"
                  color="primary"
                  dark
                  tile
                  height="40"
                  width="40"
                  @click="$emit('play', id)"
                >
                  <v-icon v-text="howl ? howl.playing() ? 'mdi-pause' : icon : icon" />
                </v-sheet>
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
                <h5 class="card-title">{{ title }}</h5>
              </a>
              <p class="card-text">
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
                    {{ anchorName }}
                  </div>
                  <div class="right_1">
                    <div class="date">
                      {{ date }}
                    </div>
                    <div class="browse">
                      1250 浏览
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
  export default {
    name: 'PodcastCard',
    props: {
      id: [Number, String],
      category: String,
      comments: [Number, String],
      date: String,
      divider: Boolean,
      html: String,
      icon: String,
      prominent: Boolean,
      readMore: Boolean,
      podcastType: Number,
      anchorName: String,
      anchorImg: String,
      audio: String,
      howl: Object,
      src: String,
      to: String,
      text: String,
      title: String,
      truncate: {
        type: [Number, String],
        default: 70,
      },
    },

    computed: {
      truncatedText() {
        if (!this.text) return ''

        const truncate = Number(this.truncate)

        return this.text.length > truncate
          ? this.text.slice(0, truncate) + '...'
          : this.text
      },
      podcastTypeText() {
        const s = {
          1: '就业',
          2: '零碳消费',
        }
        return s[this.podcastType]
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
.no-line
  text-decoration: none
.card-content
  display: flex
  height: 100%
  flex-direction: column
  justify-content: space-between
  .card-title
    font-size: 20px
    font-weight: bold
    color: rgba(0,0,0,.84)
    &:hover
      color: #4370f5
  .card-text
    flex: 1 1 auto
    margin-top: 5px
    font-size: 14px
    line-height: 22px
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
