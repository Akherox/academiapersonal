<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title class="text-center">EXERCICIOS</q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" to="/perfilusuario" />
      </q-toolbar>
    </q-header>
    <!-- <q-list bordered separator>
      <q-item v-for="exercicio in exercicios" :key="exercicio">
        <q-item-section>
          <q-item-label>{{ exercicio.tipo }}</q-item-label>
          <q-item-label caption>{{ exercicio.categoria }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label> Horas: {{ exercicio.cargaHoraria }}</q-item-label>
          <q-item-label v-if="exercicio.concluido">Concluido</q-item-label>
        </q-item-section>
      </q-item>
    </q-list> -->
    <div class="q-pa-md" style="max-width: 500px">
      <q-input v-model="search" filled type="search" hint="Pesquisar exercicio">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <q-list bordered separator>
      <q-item v-for="item in itens" :key="item.exercicio">

        <q-item-section top avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.exercicio.tipo }}m</q-item-label>
          <q-item-label caption>{{ item.exercicio.categoria }}</q-item-label>
        </q-item-section>
        <!-- <q-item-section>
          <q-item-label> Horas: {{ item.exercicio.cargaHoraria }}</q-item-label>
          <q-item-label v-if="item.exercicio.concluido">Concluido</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <q-rating v-model="item.exercicio.avaliacao" icon="star" color="orange" /> 
        </q-item-section> -->

        <q-item-section side right >
          <q-checkbox v-model="item.selecionado" size="lg"/>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-pa-md" style="max-width: 500px">
      <div class="q-gutter-y-md">
        <a-btn push label="Adicionar Exercicios" class="glossy"/>
      </div>
    </div>
    <q-footer>
      <a-menu/>
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from "vue";
import ABtn from 'components/ABtn'
import AMenu from 'components/AMenu';

export default {
  name: "Page Index",
  components: {
    ABtn,
    AMenu
  },
  data() {
    return {
      itens: [
        {
          selecionado: false,
          exercicio: {
            tipo: "HIPERTROFIA MUSCULAR",
            categoria: "Aumento da massa magra",
            cargaHoraria: 0.3,
            concluido: false,
            dataUltimoJogo: "2021-06-01",
            avaliacao: 4,
          },
        },
        {
          selecionado: false,
          exercicio: {
            tipo: "RESISTÊNCIA MUSCULAR",
            categoria: "Manter a força máxima num músculo",
            dataLancamento: "2019-04-01",
            cargaHoraria: 0.15,
            concluido: true,
            dataUltimoJogo: "2021-07-10",
            avaliacao: 5,
          },
        },
        {
          selecionado: false,
          exercicio: {
            tipo: "POTÊNCIA MUSCULAR",
            categoria: "Velocidade e força exercida",
            cargaHoraria: 0.2,
            concluido: false,
            dataUltimoJogo: "2021-06-01",
            avaliacao: 4,
          },
        },
        {
          selecionado: false,
          exercicio: {
            tipo: "HIT",
            categoria: "Alta intensidade",
            dataLancamento: "2019-04-01",
            cargaHoraria: 0.25,
            concluido: true,
            dataUltimoJogo: "2021-07-10",
            avaliacao: 5,
          },
        },
      ],
    };
  },
  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>
