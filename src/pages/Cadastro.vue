<template>
  <q-page padding>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
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
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Crie uma Senha"
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
        <q-btn
          class="col-12"
          label="Confirmar"
          style="background: #11f500; color: black"
          to="/cadastrosucesso"
        />
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
