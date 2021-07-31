<template>
  <q-page padding>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm"/>
    <h3>Exercicios</h3>
    <q-list bordered separator>
      <q-item v-for="exercicio in exercicios" :key="exercicio">
        <q-item-section>
          <q-item-label>{{exercicio.tipo}}</q-item-label>
          <q-item-label caption>{{exercicio.categoria}}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label> Horas: {{exercicio.cargaHoraria}}</q-item-label>
          <q-item-label v-if="exercicio.concluido">Concluido</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
   name: 'Page Index',
   data() {
     return {
       exercicios: [
         {
           tipo: 'HIPERTROFIA MUSCULAR',
           categoria: 'Aumento da massa magra',
           cargaHoraria: 0.30,
           concluido: false,
           dataUltimoJogo: '2021-06-01',
           avaliacao: 4,
         },
         {
           tipo: 'RESISTÊNCIA MUSCULAR',
           categoria: 'Manter a força máxima num músculo',
           dataLancamento: '2019-04-01',
           cargaHoraria: 0.15,
           concluido: true,
           dataUltimoJogo: '2021-07-10',
           avaliacao: 5, //isso
         },
         {
           tipo: 'POTÊNCIA MUSCULAR',
           categoria: 'Velocidade e força exercida',
           cargaHoraria: 0.20,
           concluido: false,
           dataUltimoJogo: '2021-06-01',
           avaliacao: 4,
         },
         {
           tipo: 'HIT',
           categoria: 'Alta intensidade',
           dataLancamento: '2019-04-01',
           cargaHoraria: 0.25,
           concluido: true,
           dataUltimoJogo: '2021-07-10',
           avaliacao: 5,
         }
       ]
     }
   }
}
</script>
