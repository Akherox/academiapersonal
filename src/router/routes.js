
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue')},
      { path: 'criarperfil', component: () => import('pages/CriarPerfil.vue')},
      { path: 'listaexercicios', component: () => import('pages/ListaExercicios.vue')},
      { path: 'perfilusuario', component: () => import('pages/PerfilUsuario.vue')},
      { path: 'menu', component: () => import('pages/Index.vue')},
      { path: 'serieexercicio', component: () => import('pages/SerieExercicio.vue')},
      { path: 'testes', component: () => import('pages/TESTES.vue')}
    ]
  },
  {
    path: 'usuario',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'usuario/login', component: () => import('pages/Login.vue')},
      { path: 'usuario/cadastro', component: () => import('pages/Cadastro.vue')},
      { path: 'usuario/cadastrosucesso', component: () => import('pages/CadastroSucesso.vue')},
      { path: 'usuario/mailrecuperarsenha', component:	() => import('pages/MailRecSenha.vue')},
      { path: 'usuario/codigorecuperarsenha', component: () => import('pages/CodRecSenha.vue')},
      { path: 'usuario/novasenha', component: () => import('pages/NovaSenha.vue')},
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
