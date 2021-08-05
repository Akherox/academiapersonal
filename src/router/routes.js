
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue')},
      { path: '/cadastro', component: () => import('pages/Cadastro.vue')},
      { path: '/cadastrosucesso', component: () => import('pages/CadastroSucesso')},
      { path: '/criarperfil', component: () => import('pages/CriarPerfil')},
      { path: '/listaexercicios', component: () => import('pages/ListaExercicios')},
      { path: '/mailrecuperarsenha', component:	() => import('pages/MailRecSenha')},
      { path: '/codigorecuperarsenha', component: () => import('pages/CodRecSenha')},
      { path: '/novasenha', component: () => import('pages/NovaSenha')} 
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
