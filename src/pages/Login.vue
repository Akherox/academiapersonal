<template>
  <q-page padding class="center" style="max-width: 600px">
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
    <q-form class="q-pa-md q-gutter-md" style="max-width: 600px">
      <h3></h3>
      <div class="flex justify-center">
        <q-img
          class="q-mb-xl"
          style="max-width: 180px"
          src="~/assets/Logo.png"
        />
      </div>
      <q-input
       filled
        v-model="text"
        hint="Usuário"
        :dense="dense"
        style="color: white"
        
      />
      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Insira sua Senha"
        style="color: white"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="q-pa-sm">
        <q-checkbox
          v-model="right"
          label="Mater-me logado"
          style="color: white"
        />
      </div>

      <div class="row">
        <div class="col q-col-gutter-y-md">
          <div class="row">
            <div class="col">
              <q-btn push
                class="full-width glossy"
                label="Fazer Login"
                style="background: #11f500; color: black"
                to="/"
              />
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col">
              <q-btn push
                class="full-width glossy flex justify-center"
                label="Esqueci a Senha"
                style="color: white"
                to="/mailrecuperarsenha"
              />
            </div>
            <div class="col">
              <q-btn push
                class="full-width glossy flex justify-center"
                label="Cadastrar"
                style="color: white"
                to="/cadastro"
              />
            </div>
          </div>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      text: ref(""),
      dense: ref(false),
      right: ref(false),
    };
  },
};
</script>
