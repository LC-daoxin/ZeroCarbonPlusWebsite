<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-bg-2.jpeg')"
      class="white--text"
    >
      <!-- gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.1)" -->
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-subheading
            weight="regular"
            :title="$t('home.title1')"
          />

          <base-heading
            size="text-h3"
            :title="$t('home.title')"
            weight="medium"
          />
          <!-- <vue-typed-js
            :strings="['First text', 'Second Text']"
            :loop="true"
            :type-speed="100"
            :back-speed="30"
            :back-delay="2500"
          >
            <h1 class="typing" />
          </vue-typed-js> -->

          <base-body>
            <span class="white--text">{{ $t('home.content') }}</span>
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <!-- <router-link :to="{name: 'About'}">
            </router-link> -->
            <a href="#about">
              <base-btn>
                {{ $t('about.text') }}
              </base-btn>
            </a>
            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <v-hover v-slot="{ hover }">
              <router-link
                :class="{ 'noline': !hover }"
                :to="{name: 'Contact'}"
              >
                <base-btn
                  :ripple="false"
                  height="auto"
                  :min-width="96"
                  text
                >
                  <span :class="{ 'white--text': !hover }">{{ $t('contact.title') }}</span>
                  <v-icon
                    :color="hover ? 'primary' : 'white'"
                  >
                    {{ icon.right }}
                  </v-icon>
                </base-btn>
              </router-link>
            </v-hover>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  import { mdiChevronRight } from '@mdi/js'
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },
    data() {
      return {
        icon: {
          right: mdiChevronRight,
        },
      }
    },
    computed: {
      minHeight() {
        const height = this.$vuetify.breakpoint.mdAndUp ? '40vh' : '32vh'
        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
<style lang="sass" scoped>
.noline
  text-decoration: none
</style>
