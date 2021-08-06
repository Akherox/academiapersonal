<template>
  <q-page padding>
    <q-header>
          <q-toolbar>
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" to="/perfilusuario" />
      </q-toolbar>
        </q-header>
        <h3>Home</h3>
        <q-footer>
      <q-tabs>
        <q-route-tab icon="fact_check" label="Lista" to="/listaexercicios" />
        <q-route-tab icon="home" label="Home" to="/home" />
        <q-route-tab icon="fitness_center" label="Serie" to="/serieexercicio" />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
