<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="settings">
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
                  v-close-popup
                  to="/login"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <h3></h3>
    <div class="flex justify-center">
      <q-img class="q-mb-xl" style="max-width: 180px" src="~/assets/Logo.png" />
    </div>
    <q-list dark separator>
      <q-item>
        <q-item-section class="q-mb-xl flex-center">
        <q-avatar rounded size="100px">
          <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
        </q-avatar>
      </q-item-section>
      </q-item>
        <q-item>
        <q-item-section>
          <q-item-label>{{ usuario.nome }}</q-item-label>
          <q-item-label caption>Nome</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>{{ usuario.sobrenome }}</q-item-label>
          <q-item-label caption>Sobrenome</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>{{ usuario.data }}</q-item-label>
          <q-item-label caption>Nascimento</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>{{ usuario.genero }}</q-item-label>
          <q-item-label caption>genero</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>{{ usuario.objetivo }}</q-item-label>
          <q-item-label caption>Objetivo </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-footer>
      <a-menu />
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from "vue";
import AMenu from "components/AMenu";
import { useQuasar } from "quasar";


export default {
  components: {
    AMenu,
    
  },
  computed: {
    usuario() {
      return this.$store.state.usuario.usuario;
    },
  },
};
</script>
