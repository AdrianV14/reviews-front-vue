export const homeRoutes = [
  {
    path: '',
    component: () => import('../layouts/home-layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/home-page.vue'),
      },
      {
        path: 'category/:id',
        component: () => import('../pages/category-page.vue'),
      },
    ],
  },
]
