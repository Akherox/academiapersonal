
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue')},
      { path: '/cadastro', component: () => import('pages/Cadastro.vue')},
      { path: '/cadastrosucesso', component: () => import('pages/CadastroSucesso.vue')},
      { path: '/criarperfil', component: () => import('pages/CriarPerfil.vue')},
      { path: '/listaexercicios', component: () => import('pages/ListaExercicios.vue')},
      { path: '/mailrecuperarsenha', component:	() => import('pages/MailRecSenha.vue')},
      { path: '/codigorecuperarsenha', component: () => import('pages/CodRecSenha.vue')},
      { path: '/novasenha', component: () => import('pages/NovaSenha.vue')},
      { path: '/perfilusuario', component: () => import('pages/PerfilUsuario.vue')},
      { path: '/home', component: () => import('pages/Home.vue')},
      { path: '/serieexercicio', component: () => import('pages/SerieExercicio.vue')}
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
