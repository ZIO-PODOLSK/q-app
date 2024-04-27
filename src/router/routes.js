const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/todoList',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/todoList.vue') }
    ]
  },
  {
    path: '/help',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/helpList.vue') }
    ]
  }, 
  {
    path: '/contacts',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/contactsList.vue') }
    ]
  },
  {
    path: '/aboutUs',
    component: () => import('pages/aboutUs.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
