<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" to="/perfilusuario" />
      </q-toolbar>
    </q-header>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
    <h3>Serie</h3>

    <div class="q-pa-md" style="max-width: 400px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" square icon="check" />
        </q-item-section>
        <q-item-section>
          <q-item-label >Curl com barra</q-item-label>
          <q-item-label overline>3 x 15-20 (35 carga)</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" square icon="check" />
        </q-item-section>
        <q-item-section>
          <q-item-label >Curl com barra agarre afastado</q-item-label>
          <q-item-label overline>3 x 15-20 (35 carga)</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" square icon="check" />
        </q-item-section>
        <q-item-section>
          <q-item-label >Curl com barra ez</q-item-label>
          <q-item-label overline>3 x 15-20 (35 carga)</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

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
