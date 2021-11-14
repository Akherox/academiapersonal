<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/menu" />
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-header>
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
      
      <div class="q-gutter-sm" style="font-size: 3rem; color: #11f500">
        <h5>Esqueci minha senha</h5>
      </div>
    </div>
    <div class="q-pa-sm q-gutter-md text-center">
      <h8>Insira seu código enviado para</h8>
    </div>
    <div
      class="q-pa-md q-gutter-md text-center"
      style="font-size: 0.9rem; color: #11f500"
    >
      <h8>exemplonatela@gmail.com</h8>
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
        <q-btn push
          class="col-12 glossy"
          label="Continuar"
          style="background: #11f500; color: black"
          to="/novasenha"
        />
      </div>
    </q-form>
    <div
      class="q-pa-md q-gutter-md text-center"
      style="font-size: 0.9rem; color: #11f500"
    >
      <h8>Eu não recebí um código</h8>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
