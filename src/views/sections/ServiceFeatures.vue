<template>
  <base-section
    id="service-features"
    :background="background"
  >
    <base-section-heading
      icon="mdi-vuetify"
      title="About our Product"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-details-card
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
          title: 'Network',
          subtitle: 'Best Productivity',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '01',
          imgUrl: require('@/assets/infoImg-1.jpeg'),
          delay: 100,
        },
        {
          title: 'Global View',
          subtitle: 'Special Offers',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '02',
          imgUrl: require('@/assets/infoImg-4.jpeg'),
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
