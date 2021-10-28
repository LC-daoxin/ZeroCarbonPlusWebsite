<template>
  <base-section
    id="affiliates"
    space="36"
  >
    <v-container>
      <base-section-heading :title="$t('home.title3')" />

      <v-slide-group>
        <template v-for="(item, i) in list">
          <v-slide-item
            :key="i"
            class="align-self-center"
          >
            <base-img
              :src="item.img"
              color="grey"
              contain
              :height="item.height"
              width="128"
            />
          </v-slide-item>

          <v-responsive
            v-if="i < 3"
            :key="`divider-${i}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
    data() {
      return {
        list: [
          {
            img: require('@/assets/partner/1.png'),
            height: 60,
          },
          {
            img: require('@/assets/partner/2.svg'),
            height: 60,
          },
          {
            img: require('@/assets/partner/3.jpeg'),
            height: 70,
          },
          {
            img: require('@/assets/partner/4.png'),
            height: 60,
          },
        ],
      }
    },
  }
</script>
