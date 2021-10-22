<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-toolbar-title class="text-center">Exercicios do Dia</q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable to="/perfilusuario">
                <q-item-section>Meu Perfil</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable to="/">
                <q-item-section>Sair</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />


<q-list boredered separator >
      <q-item clickable v-ripple >
        <q-avatar color="primary" text-color="white">
            A
        </q-avatar>
        <q-item-section>  Serie Matutina</q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" name="send" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple >
        <q-avatar color="primary" text-color="white">
            B
        </q-avatar>
        <q-item-section class="center-justify">  Serie Diaria</q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" name="send" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple >
        <q-avatar color="primary" text-color="white">
            C
        </q-avatar>
        <q-item-section>  Serie Nocturna</q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" name="send" />
        </q-item-section>
      </q-item>
    </q-list>

    <!-- <q-circular-progress
    <q-item-section avatar>
          <q-icon color="primary" name="send" />
        </q-item-section>
      show-value
      font-size="12px"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ value }}%
    </q-circular-progress> -->

    <q-footer>
        <a-menu />
    </q-footer>
  </q-page>
</template>

<script>
// import { ref } from "vue";
import AMenu from "components/AMenu";

export default {
  name: "Page Index",
  components: {
    AMenu
  },
  setup() {
    return {
      // columns,
      // rows,
      // value: 81
    };
  },
};
</script>