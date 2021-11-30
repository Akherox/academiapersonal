<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md">
      <div class="text-center">
        <h3></h3>
        <div class="flex justify-center">
          <q-img
            class="q-mb-sm"
            style="max-width: 180px"
            src="~/assets/Logo.png"
          />
        </div>
      </div>
      
      <div class="q-gutter-sm m" style="font-size: 3rem; color: #11f500">
        <h5>Esqueci minha senha</h5>
      </div>
    </div>
    <div class="q-pa-md q-gutter-md">
      <h6>Defina sua nova senha.</h6>
    </div>
    <q-form class="q-pa-md q-gutter-md">
      <q-input filled v-model="text" label="Senha" />
      <q-input filled v-model="text" label="Confirmar senha" />
      <div class="row">
        <q-btn push
          class="col-12 glossy"
          label="Alterar senha"
          style="background: #11f500; color: black"
          to="/login"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      text: ref(""),
    };
  },
};
</script>
