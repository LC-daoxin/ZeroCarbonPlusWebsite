<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'About',

    metaInfo: { title: 'About Us' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'about-our-product',
        // 'customer-reviews',
        'team',
        'theme-features',
        'info-graph',
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
