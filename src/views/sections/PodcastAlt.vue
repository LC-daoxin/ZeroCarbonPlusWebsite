
<template>
  <base-section
    id="Podcast"
    color="#f5f7fd"
    space="50"
  >
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="9"
        >
          <podcasts-card
            v-for="(podcast, i) in podcastList"
            :key="i"
            :divider="i + 1 < podcastList.length"
            class="mb-5"
            v-bind="podcast"
            @play="audioPlay"
          />
          <podcast-audio
            ref="audio"
            :podcast-list="podcastList"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <introduce />

          <team />

          <news-archives />

          <news-tags />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionPodcastAlt',

    components: {
      NewsArchives: () => import('@/components/news/Archives'),
      PodcastsCard: () => import('@/components/podcasts/Card'),
      Team: () => import('@/components/podcasts/Team'),
      Introduce: () => import('@/components/podcasts/Introduce'),
      NewsTags: () => import('@/components/news/Tags'),
      PodcastAudio: () => import('@/components/podcasts/Audio'),
    },

    data: () => ({
      podcastList: [
        {
          id: 1,
          date: '2021-10-09',
          icon: 'mdi-play',
          howl: null,
          anchorName: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          title: '秋招季 | 多边银行在招什么样的可爱人才',
          text: '编辑导读：非政府组织？渊源何在: CYCAN，青年应对气候变化行动网络，中国青年开展气候行动的头部机构, 从非政府组织到多边银行, 经济金融领域的绿色岗位机会有哪些...',
          src: require('@/assets/podcasts/podcast-a1.jpeg'),
          // audio: 'audio_001.m4a',
          audio: 'https://aod.cos.tx.xmcdn.com/storages/a536-audiofreehighqps/D3/B6/CKwRIasFN3w7APWRvwDrCEpI.m4a',
          podcastType: 1,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/460832420',
        },
        {
          id: 2,
          date: '2021-10-07',
          icon: 'mdi-play',
          howl: null,
          anchorName: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          title: '秋招季 | 去咨询公司上班怎么样',
          text: '编辑导读：电力市场的咨询工作，为何想来做这块，咨询行业在与可持续相关的岗位有哪些？以电力咨询为例，业务版块有哪些？职业发展路径...',
          src: require('@/assets/podcasts/podcast-a2.jpeg'),
          // audio: 'Guardians.mp3',
          audio: 'https://aod.cos.tx.xmcdn.com/storages/56f5-audiofreehighqps/6E/C2/CKwRINsFNGYaARUjqgDqO9fd.m4a',
          podcastType: 1,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/460062837',
        },
        {
          id: 3,
          date: '2021-09-18',
          icon: 'mdi-play',
          howl: null,
          anchorName: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          title: '秋招季 | 听罗德学者讲述职业规划',
          text: '编辑导读：为何“罗德学者”这么牛？被誉为“本科生界的诺贝尔奖”，带你了解什么是罗德奖学金. 为何关注气候变化？这一领域有何机会？各个岗位的晋升通道...',
          src: require('@/assets/podcasts/podcast-a3.jpeg'),
          // audio: 'audio_003.m4a',
          audio: 'https://aod.cos.tx.xmcdn.com/storages/ebe5-audiofreehighqps/87/1F/CKwRIasFGtr0AOwF_gDkHMoY.m4a',
          podcastType: 1,
          to: 'https://www.ximalaya.com/gerenchengzhang/52797354/454524599',
        },
        {
          id: 4,
          date: 'May 4, 2019',
          icon: 'mdi-play',
          howl: null,
          anchorName: '张浩然',
          anchorImg: require('@/assets/users/user-haoran.png'),
          title: '穿！我们定义衣服还是它定义我们？',
          text: '编辑导读：谁在定义时尚？谁在推动时尚产业向可持续模式转变？谁要关注这个？和我有啥关系？请思考：我们买衣服是在买什么？我们的购买也在促进气候变化，以及污染、农药使用、有毒废料排放...',
          src: require('@/assets/podcasts/podcast-a4.jpeg'),
          // audio: 'audio_004.m4a',
          audio: 'https://aod.cos.tx.xmcdn.com/storages/f504-audiofreehighqps/7F/48/CKwRIRwFFQdJAQNrqwDis4zC.m4a',
          podcastType: 2,
          to: 'https://www.ximalaya.com/shishang/52796115/453170771',
        },
      ],
    }),
    methods: {
      audioPlay(id) {
        this.$refs.audio.play(id)
      },
    },
  }
</script>
