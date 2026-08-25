export const adminRoutes = [
  {
    path: '/',
    component: () => import('../layouts/admin-layout.vue'),
    children: [
      {
        path: 'admin/reviews',
        name: 'admin-reviews-page',
        component: () => import('../pages/reviews-admin-page.vue'),
      },
      {
        path: 'admin/reviews/:id',
        name: 'admin-review-page',
        component: () => import('../pages/review-admin-page.vue'),
      },
      {
        path: 'admin/categories',
        name: 'admin-categories-page',
        component: () => import('../pages/categories-admin-page.vue'),
      },
    ],
  },
]
