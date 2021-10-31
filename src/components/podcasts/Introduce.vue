<template>
  <div>
    <base-text-field
      append-icon="mdi-magnify"
      :label="$t('podcast.search')"
    />

    <base-info-card :title="$t('about.text')">
      <base-img
        :src="require('@/assets/podcasts/podcast-logo.jpg')"
        class="mb-2"
        color="grey lighten-1"
        width="200"
        tile
      />

      <base-body>
        <div>{{ $t('podcast.content1') }}</div>
        <div>
          {{ $t('podcast.content2') }}
          <a
            v-if="$i18n.locale == 'en'"
            href="mailto:podcast@2030climateplus.cn"
          >podcast@2030climateplus.cn</a>
          <a
            v-else
            href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=podcast@2030climateplus.cn"
          >podcast@2030climateplus.cn</a>
        </div>
      </base-body>
    </base-info-card>
  </div>
</template>

<script>
  export default {
    name: 'Introduce',
  }
</script>
