<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" to="/perfilusuario" />
      </q-toolbar>
    </q-header>
    <h3>Serie</h3>
    <q-footer style="color: black">
      <q-tabs>
        <a-menu/>
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
