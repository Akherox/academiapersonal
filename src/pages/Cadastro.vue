<template>
  <q-page padding class="center" style="max-width: 400px">
    <q-form class="q-pa-md q-gutter-md" >
      <h3></h3>
      <div class="flex justify-center">
        <q-img
          class="q-mb-xl"
          style="max-width: 180px"
          src="~/assets/Logo.png"
        />
      </div>

      <q-input
        v-model="email"
        type="email"
        hint="Digite seu email"
        filled
      >

      </q-input>
    <q-input v-model="password" filled :type="isPwd ? 'password' : text " hint="Crie uma Senha">
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
          <a-btn label="Confirmar" to="/cadastro/sucesso" />
    </div>
  </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import ABtn from "components/ABtn.vue";

export default {
  components: {
    ABtn,
  },
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
