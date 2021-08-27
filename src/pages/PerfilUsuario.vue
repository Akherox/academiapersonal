<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="settings" to="/perfilusuario">
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Configurações</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Usuario</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup to="/login"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <h3>Perfil</h3>
    <q-footer style="color: black">
      <q-tabs>
        <a-menu/>
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      mobileData: ref(true),
      bluetooth: ref(false),
    };
  },
};
</script>
