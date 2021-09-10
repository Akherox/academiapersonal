<template>
  <q-page padding>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
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
        <q-btn push
          class="col-12 glossy"
          label="Criar Perfil"
          style="background: #11f500; color: black"
          to="/criarperfil"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
