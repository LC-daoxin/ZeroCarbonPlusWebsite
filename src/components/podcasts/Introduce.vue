<template>
  <div>
    <base-text-field
      append-icon="mdi-magnify"
      :label="$t('podcast.search')"
    />

    <base-info-card title="About Us">
      <base-img
        :src="require('@/assets/podcasts/podcast-logo.jpg')"
        class="mb-2"
        color="grey lighten-1"
        width="200"
        tile
      />

      <base-body>
        <div>简介：谈气候正义谈青年机会</div>
        <div>谈职业发展「弹走碳碳碳」</div>
      </base-body>
    </base-info-card>
  </div>
</template>

<script>
  export default {
    name: 'Introduce',
  }
</script>
