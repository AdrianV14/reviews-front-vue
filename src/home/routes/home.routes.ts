export const homeRoutes = [
  {
    path: '',
    component: () => import('../layouts/home-layout.vue'),
    children: [
      {
        path: '',
        name:'home-page',
        component: () => import('../pages/home-page.vue'),
      },
      {
        path: '/category/:id',
        name:'category-page',
        component: () => import('../pages/category-page.vue'),
      },
    ],
  },
]
