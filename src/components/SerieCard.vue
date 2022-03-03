<template>
  <q-card class="serie-card">
          <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ serie.exercicio.nome }}</div>
      </q-card-section>

      <q-separator />
    <q-video :src="serie.exercicio.video" />

    <q-card-section>
      <div class="text-h6" style="text-color; color: #11f500">
        {{ serie.exercicio.nome }}
      </div>
      <div class="text-subtitle2">{{ tipoDesc }}</div>
      <div class="text-subtitle2" style="text-color; color: #11f500" v-if="serie.tipo == 'rep'">
        {{ serie.vezes }} X  {{ serie.valor }}
      </div>
      <div class="text-subtitle2" style="text-color; color: #11f500" v-else>
        {{ serie.valor }} Minutos
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ serie.exercicio.descricao }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["serie"],
  computed: {
    tipoDesc() {
      if (this.serie.tipo == "rep") return "Repetição";
      else return "Tempo";
    },
  },
};
</script>

<style>
.serie-card { margin-bottom: 30px;} 
</style>
