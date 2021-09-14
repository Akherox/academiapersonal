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
    <q-footer >
        <a-menu/>
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
