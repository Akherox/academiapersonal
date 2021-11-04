<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="settings" to="/dadosperfil">
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
    <h3>Perfil</h3>
    <q-item>
      <q-item-section>
        <q-avatar rounded size="100px"
          ><img src="https://cdn.quasar.dev/img/boy-avatar.png"
        /></q-avatar>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-item-label>NOME</q-item-label>
        <q-item-label caption lines="2">Willian Roberto Guimarães</q-item-label>
      </q-item-section>
      <q-separator spaced inset />
      <q-item-section>
        <q-item-label>SOBRENOME</q-item-label>
        <q-item-label caption lines="2">Guimarães</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    <q-item>
      <q-item-section>
        <q-item-label>APELIDO</q-item-label>
        <q-item-label caption lines="2">Lico</q-item-label>
      </q-item-section>
      <q-separator spaced inset />
      <q-item-section>
        <q-item-label>DATA DE NASCIMENTO</q-item-label>
        <q-input
          class="col"
          dark
          v-model="date"
          filled
          type="date"
          stack-label
        />
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    <q-item>
      <q-item-section>
        <q-item-label>SEXO</q-item-label>
        <q-item-label caption lines="2">Masculino</q-item-label>
      </q-item-section>
      <q-separator spaced inset />
      <q-item-section>
        <q-avatar rounded size="40px">
          <img
            src="https://www.treinus.com.br/blog/wp-content/uploads/2020/05/tipos-de-exercicios-f%C3%ADsicos.jpg"
          />
        </q-avatar>
        <q-item-label>OBJETIVO</q-item-label>
        <q-item-label caption lines="2"
          >Hipertofia Muscular/Cardio</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    <q-item-section>
      <q-input
        class="col"
        dark
        v-model="time"
        filled
        type="time"
        label="Tempo disponivel"
        stack-label
      />
    </q-item-section>
    <q-separator spaced inset />
    <q-item>
      <q-item-section>
        <q-item-label>FRASE INSPIRADORA E MOTIVACIONAL</q-item-label>
        <q-item-label caption lines="2">No pain, no gain </q-item-label>
      </q-item-section>
    </q-item>
    <q-footer>
      <a-menu />
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from "vue";
import AMenu from 'components/AMenu';

export default {
  components: {
    AMenu
  },
  setup() {
    return {
      mobileData: ref(true),
      bluetooth: ref(false),
      date: ref(""),
      model1: ref(null),
      time: ref(""),
    };
  },
};
</script>
