
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/player',
    component: () => import('src/pages/MetaPassPlayer.vue')
  },
  {
    path: '/guild',
    component: () => import('src/pages/MetaPassGuild.vue')
  }
]

export default routes
