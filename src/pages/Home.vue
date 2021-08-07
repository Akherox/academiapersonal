<template>
  <q-page padding>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable to="/perfilusuario">
                <q-item-section>Perfil Usuario</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <h3>Home</h3>
    <q-footer style="color: black">
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
};
</script>
