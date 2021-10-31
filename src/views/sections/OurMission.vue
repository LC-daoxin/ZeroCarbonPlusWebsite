<template>
  <base-section
    id="ourMission"
    class="ma-10 py-5 rounded-xl"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <base-section-heading
            align="left"
            :subtitle="$t('zcp.subtitle')"
            tag="h2"
            :title="$t('zcp.title2')"
          />
          <v-row>
            <base-body
              class="px-12 mt-5"
              space="5"
            >
              {{ $t('zcp.content4') }}
            </base-body>
            <base-body
              class="px-12"
              space="5"
            >
              {{ $t('zcp.content5') }}
            </base-body>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'OurMission',

    data: () => ({
    }),
  }
</script>
