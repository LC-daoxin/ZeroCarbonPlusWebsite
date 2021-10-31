<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Survey',

    metaInfo: { title: 'Survey' },

    extends: View,

    mixins: [
      LoadSections([
        'survey-view',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
