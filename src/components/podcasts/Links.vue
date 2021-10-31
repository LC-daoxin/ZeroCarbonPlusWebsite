<template>
  <base-info-card title="The Media Links">
    <v-row
      class="mb-10"
      dense
    >
      <v-col
        v-for="link in Links"
        :key="link.id"
        cols="auto"
      >
        <a
          :href="link.src"
          target="_blank"
        >
          <img
            :src="link.imgSrc"
            class="logo"
            width="40px"
          >
        </a>
      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
  // import { mdiWechat, mdiLinkedin } from '@mdi/js'
  export default {
    name: 'Links',
    data: () => ({
      Links: [
        {
          id: 1,
          src: 'https://www.ximalaya.com/zhubo/273365067',
          imgSrc: require('@/assets/logo/xmly.png'),
        },
        {
          id: 2,
          src: 'https://weixin.qq.com/',
          imgSrc: require('@/assets/logo/wx.jpeg'),
        },
        {
          id: 3,
          src: 'https://www.linkedin.com/company/2030climateplus',
          imgSrc: require('@/assets/logo/LinkedIn.jpeg'),
        },
      ],
    }),
  }
</script>

<style lang="sass" scoped>
.logo
  border-radius: 5px
</style>
