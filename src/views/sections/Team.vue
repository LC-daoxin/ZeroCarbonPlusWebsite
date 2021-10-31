<template>
  <base-section
    id="team"
    space="30"
  >
    <base-section-heading
      :title="$t('home.title2')"
      icon="mdi-account-outline"
      outlined
    >
      {{ $t('home.content5') }}
    </base-section-heading>
    <v-carousel
      class="carousel"
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet height="100%">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col
              v-for="(item, y) in slide.list"
              :key="y"
              md="2"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  class="user-card mx-auto d-flex flex-column justify-center align-center pt-10 pb-7"
                  data-aos="fade-up"
                  :data-aos-delay="item.delay"
                >
                  <v-avatar size="130">
                    <img
                      :src="item.avatar"
                      :alt="item.name1"
                    >
                  </v-avatar>

                  <v-card-title class="card-title">
                    <div class="font-weight-medium">
                      {{ $i18n.locale == 'en' ? item.name1 : item.name2 }}
                    </div>
                  </v-card-title>

                  <v-card-subtitle>
                    <div
                      v-for="(post, index) in item.post"
                      :key="index"
                      class="subtitle text-center"
                    >
                      {{ $i18n.locale == 'en' ? post.en : post.zh }}
                      <br>
                    </div>
                  </v-card-subtitle>
                  <div
                    v-show="hover"
                    class="cover"
                  >
                    <p class="name font-weight-medium">
                      {{ $i18n.locale == 'en' ? item.name1 : item.name2 }}
                    </p>
                    <div
                      v-for="(post, index) in item.post"
                      :key="index"
                      class="post"
                    >
                      {{ $i18n.locale == 'en' ? post.en : post.zh }}
                      <br>
                    </div>
                    <div class="divide-line">
                      <div class="first-line" />
                      <div class="second-line" />
                    </div>
                    <p class="text">
                      {{ $i18n.locale == 'en' ? item.content1 : item.content2 }}
                    </p>
                    <v-icon class="icon-down">
                      {{ down }}
                    </v-icon>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </base-section>
</template>

<script>
  import { mdiChevronDown } from '@mdi/js'
  export default {
    name: 'Team',
    data() {
      return {
        down: mdiChevronDown,
        slides: [
          {
            page: 1,
            list: [
              {
                name1: 'Joyce Xu',
                name2: '徐沁仪',
                avatar: require('@/assets/users/user-qinyi.jpg'),
                post: [
                  {
                    en: 'Founder',
                    zh: '寰碳科技创始人',
                  },
                  {
                    en: '',
                    zh: '',
                  },
                ],
                delay: 100,
                content1:
                  'Founder of Zero Carbon Plus Tech, PhD researcher at the University of Cambridge. She also serves as the Centre researcher at the Cambridge Centre for Environment, Energy and Natural Resource Governance and research associate for the Centre of Resilience and Sustainable Development. Main areas of research: Global Climate Governance, Environment and Energy policy, Ecological security, Energy security, International Political Economy. ',
                content2:
                  '创始人，剑桥大学博士。剑桥大学环境、能源与自然资源治理中心研究员，剑桥大学韧性与可持续发展中心研究员。主要研究领域为：全球气候治理，环境与能源政策，生态与能源安全，国际政治经济学',
              },
              {
                name1: 'Jasper Zhang',
                name2: '张浩然',
                avatar: require('@/assets/users/user-haoran.png'),
                post: [
                  {
                    en: 'Co-Founder',
                    zh: '联合创始人',
                  },
                  {
                    en: '',
                    zh: '',
                  },
                ],
                delay: 200,
                content1:
                  'Master student at EIT InnoEnergy. He is the COY16 Country Coordinator of China, former Project Officer at China Youth Climate Action Network (CYCAN). Haoran has experience in carbon footprint analysis and carbon neutual pathways for power industry. ',
                content2:
                  '欧洲创新与技术研究院可持续能源研究所硕士研究生，长期关注碳排放核算与电力系统的零碳转型路径。他是第十六届联合国气候变化青年会议的中国协调员，曾任青年应对气候变化行动网络项目官员',
              },
              {
                name1: 'Leo Lin',
                name2: '林深楚',
                avatar: require('@/assets/users/user-shenchu.jpg'),
                post: [
                  {
                    en: 'Co-Founder',
                    zh: '联合创始人',
                  },
                  {
                    en: '“Let’s TalC” PM',
                    zh: '大声谈项目管理人',
                  },
                ],
                delay: 300,
                content1:
                  'Graduated from the PSIA, Sciences Po in Paris, with a master degree in environmental policy. She is now working in Envision Technology Group, a world leading renewable energy technology company. She was worked in international NGOs and media. Focusing on energy transformation and industrial transformation under the process of fight against climate change.',
                content2:
                  '研究生毕业于巴黎政治大学国际事务学院，研究方向是环境政策。目前就职于新能源科技企业远景科技集团。拥有国内多家环境类NGO、能源类媒体的实习和工作经历，关注气候变化下的能源转型和工业变革。拥有丰富的调研和报道经验，以及项目管理的经历',
              },
              {
                name1: 'Shirley Shen',
                name2: '沈燕雯',
                avatar: require('@/assets/users/user-yanwen.jpg'),
                post: [
                  {
                    en: 'Head of Strategy & Operation',
                    zh: '战略与运营负责人',
                  },
                  {
                    en: '',
                    zh: '',
                  },
                ],
                delay: 400,
                content1:
                  "Graduated from Beijing Foreign Studies University with a master's degree, she is now a core member of the strategic planning team in the global user growth department of a renowned tech unicorn. Her long term interest is empowering business  with cutting-edge technology for the smooth transition and sustainable growth in the context of low-carbon economy.",
                content2:
                  '硕士毕业于北京外国语大学，现就职于某一线全球化科技互联网公司用户增长部，从事海外战略相关工作。长期关注低碳背景下，如何利用科技赋能企业增长与转型',
              },
              {
                name1: 'Ce Lin',
                name2: '林策',
                avatar: require('@/assets/users/user-lince.jpg'),
                post: [
                  {
                    en: 'Head of Platform Engineering',
                    zh: '平台技术负责人',
                  },
                  {
                    en: '',
                    zh: '',
                  },
                ],
                delay: 500,
                content1:
                  'Graduated from Xidian University majoring in software engineering, he has been a fullstack developer with 8 years\' experience in software development. With main focus on BPM product and development for large enterprises, he is proficient in process management, continuous integration and platform construction.',
                content2:
                  '毕业于西安电子科技大学软件工程专业，从事软件研发 8 年，全栈工程师。目前从事大型企业BPM相关产品、开发工作，在流程管理、持续集成、平台级产品等方面拥有丰富的经验',
              },
            ],
          },
        ],
      }
    },
  }
</script>

<style lang="sass" scoped>
.carousel
  ::v-deep .v-carousel__controls__item
    color: #0066ff
    .v-btn__content
      color: #0066ff
  .user-card
    margin: 20px 0
    border-radius: 8px
    box-shadow: 0px 10px 19px 0px rgb(195 209 230 / 50%)
    min-width: 195px
    .card-title
      font-size: 22px
      color: #15386a
      margin-bottom: 15px
      white-space: nowrap
    .subtitle
      color: #15386a
      font-size: 14px
      letter-spacing: 0
      white-space: nowrap
    .cover
      top: 0
      width: 100%
      height: 100%
      position: absolute
      background-image: linear-gradient(135deg, rgba(7, 94, 213, 0.6) 0%, rgb(7, 94, 213) 100%)
      border-radius: 8px
      color: #fff
      padding: 20px 15px 15px
      .name
        font-size: 20px
        margin-bottom: 4px
        white-space: nowrap
      .post
        font-size: 14px
        white-space: nowrap
      .divide-line
        display: flex
        margin: 12px 0
        .first-line
          width: 12px
          height: 3px
          background: #f5a343
        .second-line
          width: 6px
          height: 3px
          margin-left: 5px
          background: #f5a343
      .text
        font-size: 13px
        max-height: 178px
        overflow-y: auto
        &::-webkit-scrollbar
          width: 5px
          height: 5px
        &::-webkit-scrollbar-thumb
          background-color: #c4c8cf35
          border: none
      .icon-down
        position: absolute
        bottom: 0
</style>
