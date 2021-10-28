<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'ZCPNetwork',

    metaInfo: { title: 'ZCP Network' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'background-info',
        'our-mission',
        // 'team',
        // 'theme-features',
        'survey',
        'global-map-info',
        'global-map',
        // 'marketing',
        // 'newsletter',
        // 'info-alt',
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
