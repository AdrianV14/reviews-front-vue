export const authRoutes = [
  {
    path: '/',
    component: () => import('../layouts/auth-layout.vue'),
    children: [
      {
        path: 'login',
        name: 'login-page',
        component: () => import('../pages/login-page.vue'),
      },
    ],
  },
]
