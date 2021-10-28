<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Podcast',

    metaInfo: { title: 'Podcast' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'podcast-alt',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'recent-works',
      },
    },
  }
</script>
