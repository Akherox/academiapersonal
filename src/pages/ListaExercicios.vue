<template>
  <q-page padding>
    <q-header>
          <q-toolbar>
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" to="/perfilusuario" />
      </q-toolbar>
        </q-header>
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
            <q-footer>
      <q-tabs>
        <q-route-tab icon="fact_check" label="Lista" to="/listaexercicios" />
        <q-route-tab icon="home" label="Home" to="/home" />
        <q-route-tab icon="fitness_center" label="Serie" to="/serieexercicio" />
      </q-tabs>
    </q-footer>
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
