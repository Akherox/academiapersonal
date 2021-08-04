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
        to="/"
      ></q-btn>
      <div class="q-gutter-sm" style="font-size: 3rem; color: #11f500">
        <h5>Esqueci minha senha</h5>
      </div>
      </div>
      <div class="q-pa-md q-gutter-md">
      <h8>Enviaremos um PIN para seu e-mail, troque sua senha.</h8>
      </div>
    <q-form class="q-pa-md q-gutter-md">
      <q-input filled v-model="text" label="E-mail" />
      <q-input filled v-model="text" label="Confirmar e-mail" />
      <div class="row">
        <q-btn
          class="col-12"
          label="Enviar para e-mail"
          style="background: #11f500; color: black"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>
