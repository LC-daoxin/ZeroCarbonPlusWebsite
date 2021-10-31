<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              :title="$t('contact.title2')"
            />

            <base-body space="0">
              <span class="white--text">
                {{ $t('contact.content1') }}
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <router-link :to="{name: 'Contact'}">
              <base-btn
                :block="$vuetify.breakpoint.smAndDown"
                color="white"
                large
                outlined
                target="_blank"
              >
                {{ $t('contact.title') }}
              </base-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionContactUs',
  }
</script>
