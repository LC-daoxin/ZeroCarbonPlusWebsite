<template>
  <base-info-card title="播客团队">
    <ul class="team">
      <li
        v-for="item in Team"
        :key="item.name"
        class="pb-3"
        @mouseenter="item.show = true"
        @mouseleave="item.show = false"
      >
        <div class="box">
          <div class="li-content">
            <v-avatar size="50">
              <img
                :src="item.avatar"
                :alt="item.name"
              >
            </v-avatar>
            <div class="content">
              <div class="h-name">
                {{ item.name }}
                <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </div>
              <div class="h-direction">
                {{ item.direction }}
              </div>
            </div>
          </div>
          <v-sheet
            v-show="item.show"
            rounded="rounded-lg"
            class="mx-auto h-sheet"
          >
            {{ item.content }}
          </v-sheet>
        </div>
      </li>
    </ul>
  </base-info-card>
</template>

<script>
  export default {
    name: 'NewsCategories',

    data: () => ({
      Team: [
        {
          name: '张浩然',
          avatar: require('@/assets/users/user-haoran.png'),
          direction: '播客主创、能源与气候变化方向',
          show: false,
          content:
            '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
        },
        {
          name: '李可儿',
          avatar: require('@/assets/user-1.jpg'),
          direction: '播客主创、新媒体与时尚方向',
          show: false,
          content:
            '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
        },
        {
          name: 'Vincent',
          avatar: require('@/assets/user-2.jpg'),
          direction: '播客主创、企业能源与城市能源方向',
          show: false,
          content:
            '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
        },
        {
          name: 'Annabelle',
          avatar: require('@/assets/user-3.jpg'),
          direction: '播客主创、新媒体与时尚方向',
          show: false,
          content:
            '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
        },
      ],
    }),
  }
</script>
<style lang="sass" scoped>
ul.team
  margin: 0
  padding: 0
  li
    list-style: none
    .li-content
      display: flex
      align-items: center
      .content
        overflow: hidden
        padding-left: 15px
        .h-name
          color: #40404c
          font-size: 16px
          font-weight: 500
        .h-direction
          width: 100%
          white-space: nowrap
          text-overflow: ellipsis
          overflow: hidden
          word-break: break-all
    .h-sheet
      padding: 12px
      text-indent: 2em
</style>
