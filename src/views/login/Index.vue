
<template>
  <v-app>
    <v-app-bar
      class="head"
      fixed
      flat
      :dense="dense"
    >
      <base-img
        :src="require('@/assets/logo_white.png')"
        class="mr-3"
        contain
        :max-width="width"
        width="100%"
      />
      <v-spacer />
      <v-btn
        text
        to="/"
        class="btnHover"
        color="title"
      >
        <v-icon>
          {{ icon.home }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col
            cols="3"
            md="4"
            class="login-left hidden-sm-and-down d-md-flex d-xl-flex text-center justify-center align-center"
          >
            <figure class="pa-5 white--text">
              <blockquote class="mb-5">
                “ It has many landing page variations to choose from, which one is always a big advantage. ”
              </blockquote>
              <figcaption class="d-flex flex-column justify-center">
                <div class="mb-3">
                  <v-avatar
                    class="mb-4"
                    size="56"
                  >
                    <base-img :src="require(`@/assets/user-1.jpg`)" />
                  </v-avatar>
                </div>
                <strong>Lida Reidy</strong>
                <span class="figcaption-footer">Project Manager | Mailchimp</span>
              </figcaption>
            </figure>
          </v-col>
          <v-col
            cols="9"
            md="8"
            sm="12"
            class="login-right d-flex justify-center align-center"
          >
            <div
              class="pa-5 black--text"
              style="max-width: 28rem"
            >
              <div class="text-center mb-5">
                <h1>Welcome back</h1>
                <p>Login to manage your account.{{ $vuetify.breakpoint.name }}</p>
              </div>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <label for="name">Name</label>
                      <v-text-field
                        v-model="name"
                        dense
                        outlined
                        :rules="nameRules"
                        name="name"
                        :counter="10"
                        placeholder="username"
                        required
                      />
                    </v-col>
                    <!-- <v-col cols="12">
                      <label for="email">Your email</label>
                      <v-text-field
                        v-model="email"
                        dense
                        outlined
                        :rules="emailRules"
                        name="email"
                        placeholder="email@gmail.com"
                        required
                      />
                    </v-col> -->
                    <v-col cols="12">
                      <label for="password">Password</label>
                      <v-text-field
                        v-model="password"
                        dense
                        outlined
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="passwordRules"
                        :type="showPassword ? 'text' : 'password'"
                        name="password"
                        hint="At least 8 characters"
                        placeholder="8+ characters required"
                        counter
                        autocomplete
                        @click:append="showPassword = !showPassword"
                      />
                    </v-col>
                    <v-col>
                      <v-btn
                        block
                        color="primary"
                        elevation="2"
                        large
                        @click="validate"
                      >
                        Log in
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  // import axios from 'axios'
  import { mdiHome } from '@mdi/js'
  export default {
    name: 'Login',
    metaInfo: { title: 'Login' },
    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
    data: () => ({
      valid: true,
      name: '',
      email: '',
      password: '',
      avatarImg: require('@/assets/user-1.jpg'),
      icon: {
        home: mdiHome,
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      showPassword: false,
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Min 8 characters',
      ],
    }),
    computed: {
      width() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return 56
          case 'sm':
            return 72
          case 'md':
            return 72
          case 'lg':
            return 96
          case 'xl':
            return 108
          default:
            return 72
        }
      },
      dense() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return true
          case 'sm':
            return true
          case 'md':
            return true
          case 'lg':
            return false
          case 'xl':
            return false
          default:
            return false
        }
      },
    },
    methods: {
      validate() {
        const valid = this.$refs.form.validate()
        console.log(valid)
        if (valid) {
          this.$axios({
            url: '/user/login',
            method: 'POST',
            data: {
              username: this.name,
              password: this.password,
            },
          }).then((res) => {
            console.log(res)
          })
        }
      },
    },
  }
</script>
<style lang="sass" scoped>
.head
  background: rgb(255 255 255 / 0%) !important
  .btnHover:hover
    background: rgba(0, 0, 0, 0.08)
.login-left
  background: rgba(33,50,91,1) url('~@/assets/wave-pattern-light.svg')
  min-height: 100vh !important
  figure
    blockquote
      margin-bottom: 0
      font-size: 1.5rem
    figcaption
      .figcaption-footer
        font-size: .875rem
// .login-right
</style>
