<template>
  <base-info-card title="播客团队">
    <ul class="team">
      <li
        v-for="item in Team"
        :key="item.id"
        class="pb-3"
        @mouseenter="item.show = true"
        @mouseleave="item.show = false"
      >
        <div class="box">
          <div class="li-content">
            <v-avatar size="50">
              <img
                :src="item.avatar"
                :alt="$i18n.locale == 'en' ? item.name1 : item.name2"
              >
            </v-avatar>
            <div class="content">
              <div class="h-name">
                {{ $i18n.locale == 'en' ? item.name1 : item.name2 }}
                <v-icon v-if="item.content1">
                  {{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </div>
              <div class="h-direction">
                {{ $i18n.locale == 'en' ? item.direction1 : item.direction2 }}
              </div>
            </div>
          </div>
          <v-sheet
            v-show="item.show && item.content1"
            rounded="rounded-lg"
            class="mx-auto h-sheet"
          >
            {{ $i18n.locale == 'en' ? item.content1 : item.content2 }}
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
          id: 1,
          name1: 'ZHANG Haoran',
          name2: '张浩然',
          avatar: require('@/assets/users/user-haoran.png'),
          direction1: 'focuses on electrical power system and climate change issues.',
          direction2: '关注电力系统与气候领域',
          show: false,
          content1: 'Master student at EIT InnoEnergy. He is the COY16 Country Coordinator of China, former Project Officer at China Youth Climate Action Network (CYCAN). Haoran has experience in carbon footprint analysis and carbon neutual pathways for power industry. ',
          content2: '联合创始人，欧洲创新与技术研究院可持续能源研究所硕士研究生，长期关注碳排放核算与电力系统的零碳转型路径。他是第十六届联合国气候变化青年会议的中国协调员，曾任青年应对气候变化行动网络项目官员。',
        },
        {
          id: 2,
          name1: 'Leo Lin',
          name2: '林深楚',
          avatar: require('@/assets/users/user-shenchu.jpg'),
          direction1: 'works in the renewable energy and EV field.',
          direction2: '清洁能源与电动汽车从业者',
          show: false,
          content1: 'Graduated from the PSIA, Sciences Po in Paris, with a master degree in environmental policy. She is now working in Envision Technology Group, a world leading renewable energy technology company. She was worked in international NGOs and media. Focusing on energy transformation and industrial transformation under the process of fight against climate change.',
          content2: '研究生毕业于巴黎政治大学国际事务学院，研究方向是环境政策。目前就职于新能源科技企业远景科技集团。拥有国内多家环境类NGO、能源类媒体的实习和工作经历，关注气候变化下的能源转型和工业变革。拥有丰富的调研和报道经验，以及项目管理的经历。',
        },
        {
          id: 3,
          name1: 'BAO Rong',
          name2: '包瑢',
          avatar: require('@/assets/users/user-baorong.jpg'),
          direction1: 'focuses on environmental policy and climate change issues.',
          direction2: '关注环境政策和气候变化议题',
          show: false,
          content1: 'focuses on environmental policy and climate change issues.',
          content2: '关注环境政策和气候变化议题',
        },
        {
          id: 4,
          name1: 'PAN Libiao',
          name2: '潘立标',
          avatar: require('@/assets/users/user-libiao.jpg'),
          direction1: 'focuses on green and low carbon industries transation.',
          direction2: '关注绿色低碳产业转型',
          show: false,
          content1: 'focuses on green and low carbon industries transation.',
          content2: '关注绿色低碳产业转型',
        },
        {
          id: 5,
          name1: 'XU Yawen',
          name2: '许雅雯',
          avatar: require('@/assets/users/user-yawen.jpg'),
          direction1: 'focuses on environmental policy and marine animal conservation.',
          direction2: '关注环境政策与海洋生物保护',
          show: false,
          content1: 'focuses on environmental policy and marine animal conservation.',
          content2: '关注环境政策与海洋生物保护',
        },
        {
          id: 6,
          name1: 'YU Zongqi',
          name2: '于宗琪',
          avatar: require('@/assets/users/user-zongqi.jpg'),
          direction1: 'focuses on the effects of climate change on animals, and energy and climate policy issues.',
          direction2: '关注气候变化对动物的影响，以及能源和气候政策议题',
          show: false,
          content1: 'focuses on the effects of climate change on animals, and energy and climate policy issues.',
          content2: '关注气候变化对动物的影响，以及能源和气候政策议题',
        },
        {
          id: 7,
          name1: 'YOU Kaicong',
          name2: '尤恺聪',
          avatar: require('@/assets/users/user-kaicong.jpg'),
          direction1: 'focuses on climate change and sustainable development because of food, and uses art as a forceful leverage in climate actions.',
          direction2: '因食物话题开始关注气候与可持续发展，用艺术作为气候行动的有力手段',
          show: false,
          content1: 'focuses on climate change and sustainable development because of food, and uses art as a forceful leverage in climate actions. ',
          content2: '因食物话题开始关注气候与可持续发展，用艺术作为气候行动的有力手段',
        },
        {
          id: 8,
          name1: 'ZHANG Boyuan',
          name2: '张博渊',
          avatar: require('@/assets/users/user-boyuan.jpg'),
          direction1: 'focuses on youth empowerment and CSR issues.',
          direction2: '关注青年赋能以及企业CSR相关议题',
          show: false,
          content1: 'focuses on youth empowerment and CSR issues.',
          content2: '关注青年赋能以及企业CSR相关议题',
        },
        {
          id: 9,
          name1: 'ZHOU Zhen',
          name2: '周真',
          avatar: require('@/assets/users/user-zhouzhen.jpg'),
          direction1: 'focuses on climate diplomacy and negotiations, clean tech and energy transition issues.',
          direction2: '关注气候外交与气候谈判、清洁技术产业和能源转型等议题',
          show: false,
          content1: 'focuses on climate diplomacy and negotiations, clean tech and energy transition issues.',
          content2: '关注气候外交与气候谈判、清洁技术产业和能源转型等议题',
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
      padding: 10px
</style>
