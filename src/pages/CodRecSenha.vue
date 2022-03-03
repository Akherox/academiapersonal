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
      <!-- <q-btn
        icon="far fa-arrow-alt-circle-left"
        style="font-size: 1.5rem; color: #11f500"
        to="/senha/nova">
        </q-btn> -->
      <div class="q-pa-xl text-center" style="font-size: 1.8rem; color: #11f500">
        ESQUECI MINHA SENHA
      </div>
    </div>
    <div class="text-center" style="font-size: 1.3rem">
      Insira seu código enviado para
      <div style="font-size: 1.3rem; color: #11f500">
        exemplonatela@gmail.com
      </div>
    </div>

    <q-form class="q-pa-sm q-gutter-sm">
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 4.5rem; color: #11f500"
      />
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 4.5rem; color: #11f500"
      />
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 4.5rem; color: #11f500"
      />
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 4.5rem; color: #11f500"
      />
      <div class="row">
        <a-btn label="Continuar" to="/senha/nova" />
      </div>
    </q-form>
    <div
      class="q-pa-md q-gutter-md text-center"
      style="font-size: 1rem; color: #11f500">
      Eu não recebí um código
    </div>
  </q-page>
</template>

<script>
import ABtn from "components/ABtn";

export default {
  // name: 'PageName',
  components: {
    ABtn,
  },
};
</script>
