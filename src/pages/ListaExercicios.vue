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

                <a-btn-sair />
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
    <div class="q-pa-md" style="max-width: 500px">
      <q-input v-model="search" filled type="search" hint="Pesquisar exercicio">
        <template v-slot:append>
          <q-icon v-if="search === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="search = ''"
          />
        </template>
      </q-input>
    </div>

    <div class="row q-gutter-md">
      <exercicio-card
        :exercicio="item.exercicio"
        v-for="item in itens"
        :key="item.exercicio.id"
        v-model:selecionado="item.selecionado"
      />
    </div>

    <!-- <div class="q-pa-md" style="max-width: 500px">
      <div class="q-gutter-y-md">
        <a-btn push label="Adicionar Exercicios" class="glossy" />
      </div>
    </div> -->
    <q-footer>
      <a-menu />
    </q-footer>
  </q-page>
</template>

<script>
// import ABtn from "components/ABtn";
import AMenu from "components/AMenu";
import ExercicioCard from "components/ExercicioCard";
import ABtnSair from "src/components/ABtnSair.vue";

export default {
  name: "Page Index",
  components: {
    // ABtn,
    AMenu,
    ExercicioCard,
    ABtnSair,
  },
  data() {
    return {
      search: "",
      mobileData: (true),
      bluetooth: (false),
    };
  },
  computed: {
    itens() {
      return this.$store.state.exercicio.exercicios.map(function (exercicio) {
        return {
          selecionado: false,
          exercicio,
        };
      });
    },
  },
  watch: {
    search() {
      this.$store.dispatch("exercicio/listar", { s: this.search });
    },
  },

  mounted() {
    this.$store.dispatch("exercicio/listar");
  },
};
</script>
