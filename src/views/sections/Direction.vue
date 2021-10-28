<template>
  <base-section
    id="direction"
    class="d-flex white"
  >
    <v-responsive
      class="mx-auto circle-bg"
      max-width="1000"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="6"
            sm="6"
          >
            <base-direction-card
              align="center"
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'Direction',

    data: () => ({
      cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Trendy Design',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Photography',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Brand Making',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: '24/7 Support',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
      ],
    }),
  }
</script>

<style lang="scss">
.circle-bg {
  background: url('~@/assets/bg-w-2.png') no-repeat top;
  background-size: 500px 500px;
}
</style>
