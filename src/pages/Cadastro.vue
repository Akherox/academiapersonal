<template>
  <q-page padding class="flex justify-center">
    <q-form class="q-pa-md q-gutter-md" style="max-width: 500px">
      <h3></h3>
      <div class="flex justify-center">
        <q-img
          class="q-mb-xl"
          style="max-width: 180px"
          src="~/assets/Logo.png"
        />
      </div>

      <q-input
        standout
        v-model="email"
        type="email"
        prefix="Digite seu Email:"
        suffix="@gmail.com"
      >
        <template v-slot:prepend>
         
        </template>
      </q-input>
    <q-input v-model="password" filled :type="isPwd ? 'password' : text " hint="Crie uma Senha ">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    
        <div class="q-pa-sm">
          <q-checkbox v-model="right" label="Manter-me logado" style="color:white"/>
        </div>
          <div class="row">
          <q-btn class="col-12" label="Confirmar" style="background: #11F500; color: black" />
    </div>
  </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      email: ref(""),
      password: ref(""),
      isPwd: ref(true),
      text: ref(""),
      dense: ref(false),
      right: ref(false),
    };
  },
};
</script>
