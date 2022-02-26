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
      <q-btn
        icon="far fa-arrow-alt-circle-left"
        style="font-size: 1.5rem; color: #11f500"
        to="/senha/nova"
      ></q-btn>

      <div class="q-gutter-sm" style="font-size: 3rem; color: #11f500">
        <h5>Esqueci minha senha</h5>
      </div>
    </div>
    <div class="q-pa-sm q-gutter-md text-center">
      <h6>Insira seu código enviado para</h6>
    </div>
    <div
      class="q-pa-md q-gutter-md text-center"
      style="font-size: 0.9rem; color: #11f500"
    >
      <h6>exemplonatela@gmail.com</h6>
    </div>

    <q-form class="q-pa-sm q-gutter-md">
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 5rem; color: #11f500"
      />
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 5rem; color: #11f500"
      />
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 5rem; color: #11f500"
      />
      <q-icon
        name="check_box_outline_blank"
        style="font-size: 5rem; color: #11f500"
      />
      <div class="row">
        <a-btn push
          class="col-12 glossy"
          label="Continuar"
          style="background: #11f500; color: black"
          to="/senha/nova"
        />
      </div>
    </q-form>
    <div
      class="q-pa-md q-gutter-md text-center"
      style="font-size: 0.9rem; color: #11f500"
    >
      <h6>Eu não recebí um código</h6>
    </div>
  </q-page>
</template>

<script>
import ABtn from "components/ABtn"

export default {
  // name: 'PageName',
  components:{
    ABtn,
  },
};
</script>
