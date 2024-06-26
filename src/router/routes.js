const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/todoList', component: () => import('pages/todoList.vue') },
      { path: '/help', component: () => import('pages/helpList.vue') },
      { path: '/contacts', component: () => import('pages/contactsList.vue') },
      { path: '/happyList', component: () => import('pages/happyList.vue') },
      { path: '/aboutUs', component: () => import('pages/aboutUs.vue') },
      { path: '/quasar', component: () => import('pages/QuasarList.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
