
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue')},
      { path: 'exercicios', component: () => import('pages/ListaExercicios.vue')},
      { path: 'exercicios/serie', component: () => import('pages/SerieExercicio.vue')},
      { path: 'perfil', component: () => import('pages/PerfilUsuario.vue')},
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue')},
    ]
  },
  {
    path: '/senha',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'recuperar', component:	() => import('pages/MailRecSenha.vue')},
      { path: 'codigo', component: () => import('pages/CodRecSenha.vue')},
      { path: 'nova', component: () => import('pages/NovaSenha.vue')},
    ]
  },
  {
    path: '/cadastro',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cadastro.vue')},
      { path: 'sucesso', component: () => import('pages/CadastroSucesso.vue')},
      { path: 'perfil', component: () => import('pages/CriarPerfil.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
