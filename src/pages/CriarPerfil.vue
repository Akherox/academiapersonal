<template>
  <q-page padding>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
    <div class="q-pa-md q-gutter-md text-center">
      <q-icon name="account_circle" style="font-size: 10rem; color: #11f500" />
    </div>
    <div class="q-pa-md q-gutter-md text-center" style="color: white">
      Foto perfil
    </div>
    <q-form class="q-pa-md q-gutter-md">
      <q-input class="col" dark v-model="text" label="Nome" />
      <q-input class="col" dark v-model="text" label="Sobrenome" />
      <q-input class="col" dark v-model="text" label="Apelido" />
      <q-input
        class="col"
        dark
        v-model="date"
        filled
        type="date"
        label="Data de Nacimento"
        stack-label
      />
      <q-select
        class="col"
        dark
        v-model="model1"
        :options="options1"
        label="Sexo"
      />
      <q-input class="col" dark v-model="text" label="Peso" />
      <q-input class="col" dark v-model="text" label="Objetivo" />
      <q-select
        class="col"
        dark
        v-model="model2"
        :options="options2"
        label="Nivel"
      />
      <q-input
        class="col"
        dark
        v-model="time"
        filled
        type="time"
        label="Tempo disponivel"
        stack-label
      />
      <q-input
        class="col"
        dark
        v-model="text"
        label="Frase inspiradora e motivacional"
        filled
        type="textarea"
      />
      <div class="row">
        <q-btn
          class="col-12"
          label="Prosseguir"
          style="background: #11f500; color: black"
          to="/login"
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
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      time: ref(""),
      date: ref(""),
      model1: ref(null),
      model2: ref(null),
      options1: ["Masculino", "Feminino"],
      options2: ["Principiante", "Intermediario", "Avançado", "Hard Work"],
    };
  },
};
</script>
