
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'hero',
        'service-features',
        // 'direction',
        'about-us',
        // 'theme-features',
        // 'recent-podcasts',
        // 'contact-us',
        // 'customer-reviews',
        'team',
        'affiliates',
        'contact-us',
        // 'news',
        // 'keep-in-touch', // 联系我们
        // 'social-media',
        // 'newsletter',
        // 'info-alt',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
