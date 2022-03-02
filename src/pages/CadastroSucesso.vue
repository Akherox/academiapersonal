<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md text-center">
      <h3></h3>
      <div class="flex justify-center">
        <q-img
          class="q-mb-xl"
          style="max-width: 180px"
          src="~/assets/Logo.png"
        />
      </div>
      <q-icon name="task_alt" style="font-size: 11rem; color: #11f500" />

      <p class="q-pa-md" style="color: white">Cadastro realizado com sucesso</p>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <a-btn
          label="Criar Perfil"
          to="/cadastro/perfil"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import ABtn from "components/ABtn"

export default {
  // name: 'PageName',
  components: {
    ABtn, 
  }
};
</script>
