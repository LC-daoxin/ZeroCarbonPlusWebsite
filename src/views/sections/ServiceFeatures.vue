<template>
  <base-section
    id="service-features"
    :background="background"
    space="50"
  >
    <!-- <base-section-heading
      icon="mdi-vuetify"
      title="About our Product"
    /> -->

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-details-card
            aos-once
            data-aos="zoom-in"
            :data-aos-delay="card.delay"
            v-bind="card"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'ServiceFeatures',

    data: () => ({
      cards: [
        // {
        //   id: 1,
        //   title1: 'GLASGOW COP26',
        //   title2: '第26届联合国气候变化大会',
        //   subtitle1: '31 OCT - 12 NOV 2021',
        //   subtitle2: '10月31日 - 11月12日',
        //   text1: 'The COP26 summit will bring parties together to accelerate action towards the goals of the Paris Agreement and the UN Framework Convention on Climate Change.',
        //   text2: 'The COP26 summit will bring parties together to accelerate action towards the goals of the Paris Agreement and the UN Framework Convention on Climate Change.',
        //   callout: '02',
        //   imgUrl: require('@/assets/COV16.png'),
        //   background: 'linear-gradient(160deg, #e8f1e3 30%,#e4f3fb 50%)',
        //   to: { name: 'Podcast' },
        //   delay: 100,
        // },
        {
          id: 1,
          title1: 'Fossil Fuels And Electricity Shortage',
          title2: '煤炭撤资与短期电荒',
          subtitle1: '"Let’s TalC"Podcast Team',
          subtitle2: '“大声谈”播客团队',
          text1: 'Who has held back climate negotiations? Will the current global energy crisis hinder the divestment of fossil fuels?',
          text2: '导读：历史上看，气候谈判都被谁拖过后腿？当前全球电荒是否会对化石能源的撤资运动带来反作用力？',
          callout: '01',
          imgUrl: require('@/assets/podcasts/wyt.jpg'),
          background: 'linear-gradient(160deg, #e8f1e3 30%,#e4f3fb 50%)',
          to: { name: 'Podcast' },
          delay: 100,
        },
        {
          id: 2,
          title1: 'How Young People Fight For Themselves',
          title2: '青年斗争的最新进展',
          subtitle1: '"Let’s TalC"Podcast Team',
          subtitle2: '“大声谈”播客团队',
          text1: 'Do you know what is the UN Climate Change Conference of Youth (COY) and the relationship between COY16 and COP26?',
          text2: '导读：格拉斯哥青年气候大会今日开幕，作为联合国的官方青年会议，这些年轻人要在为期四天的磋商中达成哪些共识？',
          callout: '03',
          imgUrl: require('@/assets/podcasts/cathy.jpg'),
          background: 'linear-gradient(160deg, #e8f1e3 30%,#e4f3fb 50%)',
          to: { name: 'Podcast' },
          delay: 200,
        },
        {
          id: 3,
          title1: 'The History And China’s Role',
          title2: '历史梳理与中国角色',
          subtitle1: '"Let’s TalC"Podcast Team',
          subtitle2: '“大声谈”播客团队',
          text1: 'Do you know what is a climate negotiation and who are the participants? What is China\'s role in it? Positive or conservative?',
          text2: '导读：气候变化这种环境议题为什么还可以谈判？有多少个国家参与？中国在其中的角色是什么？',
          callout: '03',
          imgUrl: require('@/assets/podcasts/cjy.jpg'),
          background: 'linear-gradient(160deg, #e8f1e3 30%,#e4f3fb 50%)',
          to: { name: 'Podcast' },
          delay: 300,
        },
      ],
      background: require('@/assets/bg-w-1.png'),
    }),
  }
</script>
