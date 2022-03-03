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

    <div class="q-pa-md" style="max-width: 400px" v-if="treino">
      <serie-card
        :key="serie.id"
        v-for="serie in treino.series"
        :serie="serie"
      />
    </div>
    <div v-else>Nenhum treino encontrado</div>

    <q-footer>
      <a-menu />
    </q-footer>
  </q-page>
</template>

<script>
import AMenu from "components/AMenu";
import SerieCard from "components/SerieCard";

export default {
  components: {
    AMenu,
    SerieCard,
  },

  // name: 'PageName',
  computed: {
    treino() {
      return this.$store.state.treino.dia;
    },
  },
  data() {
    return {
      mobileData: "true",
      bluetooth: "false",
    };
  },
  mounted() {
    this.$store.dispatch("treino/dia");
  },
};
</script>
