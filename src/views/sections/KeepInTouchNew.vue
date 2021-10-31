<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-info-card
            :title="$t('contact.title2')"
            size="text-h5"
            pace="6"
          >
            {{ $t('contact.content1') }}
          </base-info-card>
          <div class="d-flex align-center">
            <base-avatar
              icon="mdi-email"
              outlined
              size="50"
              class="align-self-start"
            />
            <a
              v-if="$i18n.locale == 'en'"
              class="email"
              href="mailto:contact@zerocarbonplus.com"
            >contact@zerocarbonplus.com</a>
            <a
              v-else
              class="email"
              href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=contact@zerocarbonplus.com"
            >contact@zerocarbonplus.com</a>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            size="text-h5"
            :title="$t('contact.title1')"
            pace="6"
          >
            <p>{{ $t('contact.content2') }}</p>
            <p>
              {{ $t('contact.content3') }}
              <a
                v-if="$i18n.locale == 'en'"
                class="email-text"
                href="mailto:contact@zerocarbonplus.com"
              >contact@zerocarbonplus.com</a>
              <a
                v-else
                class="email-text"
                href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=contact@zerocarbonplus.com"
              >contact@zerocarbonplus.com</a>
            </p>
          </base-info-card>
          <div class="d-flex justify-space-between">
            <img
              height="200px"
              :src="join"
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouchNew',
    data() {
      return {
        join: require('@/assets/joinus.png'),
      }
    },
  }
</script>

<style lang="sass" scoped>
.email
  text-decoration: none
  margin-left: 10px
  font-size: 20px
  font-weight: 500
.email-text
  text-decoration: none
  margin-left: 5px
  font-size: 16px
  font-weight: 300
</style>
