<template>
  <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/menu" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="settings">
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Configurações</div>
                <q-toggle  label="Use Mobile Data" />
                <q-toggle  label="Bluetooth" />
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
                  v-close-popup
                  to="/login"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
</template>

<script>
export default {

}
</script>

<style>

</style>