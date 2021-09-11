<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" to="/perfilusuario" />
      </q-toolbar>
    </q-header>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
    <h3>Serie</h3>
<<<<<<< HEAD
    <q-footer >
        <a-menu/>
=======
 <q-footer style="color: black">
      <q-tabs align="justify">
        <q-route-tab icon="fact_check" label="Lista" to="/listaexercicios"/>
        <q-route-tab icon="home" label="Home" to="/home"/>
        <q-route-tab icon="fitness_center" label="Serie" to="/serieexercicio"/>
        </q-tabs>
        </q-footer>
    <q-footer>
      <q-tabs class="text-black">
        <a-menu/>
        

      </q-tabs>
>>>>>>> 41e8a18c18f6874c5f1df3a6c68d691958a7245d
    </q-footer>
  </q-page>
</template>

<script>
import AMenu from 'components/AMenu';
export default {
  components: { AMenu },
  // name: 'PageName',
};
</script>
