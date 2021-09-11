<template>
<<<<<<< HEAD
  <q-page padding class="center" style="max-width: 600px">
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
=======
  <q-page padding class="fixed-center" style="max-width: 600px">
>>>>>>> 41e8a18c18f6874c5f1df3a6c68d691958a7245d
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
                to="/home"
              />
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col">
<<<<<<< HEAD
              <q-btn push
=======
              <q-btn push    
>>>>>>> 41e8a18c18f6874c5f1df3a6c68d691958a7245d
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
