<template>
  <base-info-card title="Podcasts">
    <ul class="pl">
      <li
        v-for="(item, i) in Classification"
        :key="i"
        class="mb-3"
      >
        {{ $i18n.locale == 'en' ? item.en : item.zh }}
      </li>
    </ul>
  </base-info-card>
</template>

<script>
  export default {
    name: 'Classification',

    data: () => ({
      Classification: [
        {
          en: 'October 2021 （7）',
          zh: '2021年10月 （7）',
        },
        {
          en: 'September 2021 （5）',
          zh: '2021年9月 （5）',
        },
        {
          en: 'May 2021 （1）',
          zh: '2021年5月 （1）',
        },
        {
          en: 'April 2021 （2）',
          zh: '2021年4月 （2）',
        },
        {
          en: 'March 2021 （1）',
          zh: '2021年3月 （1）',
        },
      ],
    }),
  }
</script>
