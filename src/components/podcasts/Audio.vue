<template>
  <div class="text-center">
    <v-bottom-sheet
      v-model="showSheet"
      inset
    >
      <v-card tile>
        <v-slider
          max="100"
          min="0"
          hide-details
          :value="progress"
          class="my-0"
          height="0"
          step="0.1"
          @change="changeProgress"
          @mousedown="mousedown"
          @mouseup="mouseup"
        />

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ $i18n.locale == 'zh' ? currentTrack.title2 : currentTrack.title1 }}</v-list-item-title>
              <v-list-item-subtitle class="subtitle">
                {{ $i18n.locale == 'en' ? currentTrack.anchorName1 : currentTrack.anchorName2 }} {{ seek | minutes }}/{{ currentTrack.howl.duration() | minutes }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon @click="skipTrack('prev')">
              <v-btn icon>
                <v-icon>mdi-rewind</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              class="my-3"
              @click="play"
            >
              <v-btn
                color="primary"
                fab
                small
                dark
              >
                <v-icon>{{ currentTrack.howl.playing() ? 'mdi-pause' : 'mdi-play' }}</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              class="ml-0"
              :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              @click="skipTrack('next')"
            >
              <v-btn icon>
                <v-icon>mdi-fast-forward</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
  import { Howl } from 'howler' // Howler
  export default {
    name: 'PodcastAudio',
    filters: {
      minutes: function (value) {
        if (!value || typeof value !== 'number') return '00:00'
        let min = parseInt(value / 60)
        let sec = parseInt(value % 60)
        min = min < 10 ? '0' + min : min
        sec = sec < 10 ? '0' + sec : sec
        value = min + ':' + sec
        return value
      },
    },
    props: {
      podcastList: Array,
    },
    data() {
      return {
        showSheet: false,
        currentSound: null,
        currentIndex: 0,
        playing: false, // 是否在播放
        seek: 0, // 声音的播放位置
      }
    },
    computed: {
      currentTrack() {
        return this.podcastList[this.currentIndex]
      },
      progress() {
        if (this.currentTrack.howl.duration() === 0) return 0
        return (this.seek / this.currentTrack.howl.duration()) * 100
      },
    },
    watch: {
      playing(playing) {
        this.seek = this.currentTrack.howl.seek()
        let updateSeek
        if (playing) {
          updateSeek = setInterval(() => {
            this.seek = this.currentTrack.howl.seek()
          }, 350)
        } else {
          clearInterval(updateSeek)
        }
      },
    },
    created: function () {
      this.podcastList.forEach((track) => {
        // let file = track.title.replace(/\s/g, '_')
        track.howl = new Howl({
          // src: [`./media/${track.audio}`],
          src: [track.audio],
          html5: true, // 用于大型音频文件
          onplay: (id) => {
            track.howl.id = id
          },
          onloaderror: (id, code) => {
            console.error(`音频${track.howl._src}：加载错误(${code}), https://github.com/goldfire/howler.js#:~:text=The%20load%20error,was%20not%20suitable.}`)
          },
          onplayerror: (id, code) => {
            console.error(`音频${track.howl._src}：播放错误(${code})`)
          },
        })
      })
    },
    methods: {
      // 播放
      play(id) {
        if (typeof id === 'number') {
          const selectedIndex = this.podcastList.findIndex(
            (track) => track.id === id,
          )
          if (selectedIndex !== this.currentIndex) {
            this.currentTrack.howl.stop()
            this.currentIndex = selectedIndex
          }
        }
        const howl = this.currentTrack.howl
        if (howl.playing()) {
          this.pause()
        } else {
          howl.play()
          this.showSheet = true
          this.playing = true
        }
      },
      // 暂停
      pause() {
        this.currentTrack.howl.pause()
        this.playing = false
      },
      // 停止
      stop() {
        this.currentTrack.howl.stop()
        this.playing = false
      },
      // 下一个 && 上一个
      skipTrack(direction) {
        let index = 0
        this.stop()
        const length = this.podcastList.length
        if (direction === 'next') {
          index = this.currentIndex + 1
          if (index >= length) {
            index = 0
          }
        } else {
          index = this.currentIndex - 1
          if (index < 0) {
            index = length - 1
          }
        }
        this.podcastList[index].howl.play()
        this.currentIndex = index
      },
      // 调整进度条
      changeProgress(num) {
        const track = this.currentTrack.howl
        console.log('changeProgress', num, (track.duration() / 100) * num)
        track.seek((track.duration() / 100) * num)
        track.play()
      },
      mousedown(event) {
        console.log('mousedown', event)
        this.currentTrack.howl.pause()
      },
      mouseup(event) {
        console.log('mouseup', event)
      },
    },
  }
</script>

<style lang="sass" scoped>
.subtitle
  margin-top: 5px
</style>
