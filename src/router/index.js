// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/Index.vue'),
    },
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'ZCP-Network',
          name: 'ZCP-Network',
          component: () => import('@/views/ZCP-network/Index.vue'),
          meta: {
            src: require('@/assets/about.jpg'),
            i18n: 'zcp.title',
          },
        },
        {
          path: 'news',
          name: 'News',
          component: () => import('@/views/news/Index.vue'),
          meta: { src: require('@/assets/news.jpg') },
        },
        {
          path: 'news/:slug',
          name: 'Article',
          component: () => import('@/views/news/Article.vue'),
          meta: { src: require('@/assets/article.jpg') },
        },
        {
          path: 'marketing',
          name: 'Marketing',
          component: () => import('@/views/marketing/Index.vue'),
          meta: { src: require('@/assets/marketing.jpg') },
        },
        {
          path: 'podcast',
          name: 'Podcast',
          component: () => import('@/views/podcast/Index.vue'),
          meta: {
            src: require('@/assets/podcasts/podcast-bg2.jpeg'),
            i18n: 'podcast.title',
          },
        },
        {
          path: 'gallery/:project',
          name: 'Project',
          component: () => import('@/views/podcast/Project.vue'),
          meta: { src: require('@/assets/project.jpg') },
        },
        {
          path: 'database',
          name: 'Database',
          component: () => import('@/views/pricing-plans/Index.vue'),
          meta: { src: require('@/assets/pricing.jpg') },
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: {
            src: require('@/assets/contact.jpg'),
            i18n: 'contact.title',
          },
        },
        {
          path: 'pro',
          name: 'Pro',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'kitchen-sink',
          name: 'Sink',
          component: () => import('@/views/sink/Index.vue'),
          meta: { src: require('@/assets/sink.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
