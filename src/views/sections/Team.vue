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
                      :alt="item.name"
                    >
                  </v-avatar>

                  <v-card-title class="card-title">
                    <div class="font-weight-medium">
                      {{ item.name }}
                    </div>
                  </v-card-title>

                  <v-card-subtitle>
                    <div
                      v-for="(post, index) in item.post"
                      :key="index"
                      class="subtitle"
                    >
                      {{ post }}
                      <br>
                    </div>
                  </v-card-subtitle>
                  <div
                    v-show="hover"
                    class="cover"
                  >
                    <p class="name font-weight-medium">
                      {{ item.name }}
                    </p>
                    <div
                      v-for="(post, index) in item.post"
                      :key="index"
                      class="post"
                    >
                      {{ post }}
                      <br>
                    </div>
                    <div class="divide-line">
                      <div class="first-line" />
                      <div class="second-line" />
                    </div>
                    <p class="text">
                      {{ item.content }}
                    </p>
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
  export default {
    name: 'Team',
    data() {
      return {
        slides: [
          {
            page: 1,
            list: [
              {
                name: '张浩然',
                avatar: require('@/assets/users/user-haoran.png'),
                post: ['CARBON+ 创始人', '平台战略负责人'],
                delay: 100,
                content:
                  '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
              },
              {
                name: '张浩然',
                avatar: require('@/assets/users/user-haoran.png'),
                post: ['CARBON+ 创始人', '平台战略负责人'],
                delay: 200,
                content:
                  '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
              },
              {
                name: '张浩然',
                avatar: require('@/assets/users/user-haoran.png'),
                post: ['CARBON+ 创始人', '平台战略负责人'],
                delay: 300,
                content:
                  '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
              },
              {
                name: '张浩然',
                avatar: require('@/assets/users/user-haoran.png'),
                post: ['CARBON+ 创始人', '平台战略负责人'],
                delay: 400,
                content:
                  '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
              },
              {
                name: '张浩然',
                avatar: require('@/assets/users/user-haoran.png'),
                post: ['CARBON+ 创始人', '平台战略负责人'],
                delay: 500,
                content:
                  '欧洲创新与技术研究院可持续能源研究所（EIT InnoEnergy）硕士在读，第十六届联合国气候变化青年会议中国协调员，曾任青年应对气候变化行动网络（CYCAN）项目官员，2019年世界大学气候变化联盟第二十五届联合国气候变化大会青年代表团领队',
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
    .card-title
      font-size: 22px
      color: #15386a
      margin-bottom: 15px
    .subtitle
      color: #15386a
      font-size: 16px
      letter-spacing: 0
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
      .post
        font-size: 15px
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
</style>
