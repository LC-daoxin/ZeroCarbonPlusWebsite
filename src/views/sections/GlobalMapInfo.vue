<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="bgblue"
      space="10"
    >
      <v-container>
        <v-row justify="center">
          <v-col
            class="d-flex align-center"
            cols="12"
          >
            <base-avatar
              :icon="icon"
              class="mr-6"
              :size="36"
              color="primary"
              dark
              outlined
            />
            <div>
              <base-title
                :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
                :title="$t('zcp.title4')"
              />
              <base-body space="0">
                <span class="white--text">
                  {{ $t('zcp.content6') }}
                </span>
              </base-body>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  import { mdiWeb } from '@mdi/js'
  export default {
    name: 'SectionContactUs',
    data() {
      return {
        icon: mdiWeb,
      }
    },
  }
</script>

<style lang="sass" scoped>
.bgblue
  background: #326fa1
</style>
