<template>
  <base-section
    id="SurveyView"
    space="0"
  >
    <div>
      <iframe
        :height="height"
        width="100%"
        src="https://wj.qq.com/s2/9242377/b6d7/"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </base-section>
</template>

<script>
  import { mdiNoteEditOutline } from '@mdi/js'
  export default {
    name: 'SurveyView',
    data: () => ({
      icon: mdiNoteEditOutline,
      height: 0,
    }),
    mounted() {
      this.height = document.documentElement.clientHeight - 56 + 'px'
    },
  }
</script>
