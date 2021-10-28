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
        {
          title: '联合国气候大会',
          subtitle: 'Best Productivity',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '01',
          imgUrl: require('@/assets/infoImg-1.jpeg'),
          to: { name: 'ZCP-Network' },
          delay: 100,
        },
        {
          title: 'GLASGOW COP26',
          subtitle: '31 OCT - 12 NOV 2021',
          text: 'The COP26 summit will bring parties together to accelerate action towards the goals of the Paris Agreement and the UN Framework Convention on Climate Change.',
          callout: '02',
          imgUrl: require('@/assets/COV16.png'),
          to: { name: 'Podcast' },
          delay: 200,
        },
        {
          title: 'Local Solutions',
          subtitle: 'Income Flow',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '03',
          imgUrl: require('@/assets/infoImg-2.jpeg'),
          delay: 300,
        },
      ],
      background: require('@/assets/bg-w-1.png'),
    }),
  }
</script>
