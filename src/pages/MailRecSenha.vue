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
      
      <div class="q-pa-lx text-center" style="font-size: 2rem; color: #11f500">
        ESQUECI A SENHA
      </div>
    </div>
    <div class="text-center">
      <h6>Enviaremos um PIN para seu e-mail, troque sua senha.</h6>
    </div>
    <q-form class="q-pa-md q-gutter-md">
      <q-input filled v-model="text" label="E-mail" />
      <q-input filled v-model="text" label="Confirmar e-mail" />
      <div class="row">
        <a-btn
          label="Enviar para e-mail"
          to="/senha/codigo"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import ABtn from "components/ABtn"

export default {
  components: {
    ABtn,
  },

  setup() {
    return {
      text: ref(""),
    };
  },
};
</script>
