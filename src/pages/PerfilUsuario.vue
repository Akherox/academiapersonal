<template>
  <q-page padding>
    <q-header>
          <q-toolbar>
        <q-btn flat round dense icon="arrow_back_ios_new" :to="`/games/${$route.params.id}`" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" to="/games" />
      </q-toolbar>
        </q-header>
        <q-footer>
      <q-tabs>
        <q-route-tab icon="trending_up" label="Progresso" to="/listaexercicios" />
        <q-route-tab icon="home" label="Home" to="/" />
        <q-route-tab icon="fitness_center" label="Exercicios" to="/exercicios" />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
