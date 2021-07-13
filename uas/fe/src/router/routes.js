
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'dashboardAdmin', component: () => import('pages/admin/Index.vue') },
      { path: 'inputProduk', name: 'inputProduk', component: () => import('pages/admin/InputProduk.vue') },
      { path: 'datauser', name: 'DataUser', component: () => import('pages/admin/DataUser.vue') },
      { path: 'dataProduk', name: 'dataProduk', component: () => import('pages/admin/DataProduk.vue') },
      { path: 'formedit/:id', name: 'formEditDVD', component: () => import('pages/admin/FormEdit.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'HomeUser', component: () => import('pages/user/Index.vue') },
      { path: '/myorder', name: 'myOrder', component: () => import('pages/user/MyOrder.vue') }
    ]
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('pages/guest/Login.vue')
  },
  {
    path: '/register',
    name: 'registerPage',
    component: () => import('pages/guest/Register.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
