<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-toolbar-title class="text-center">Exercicios do Dia</q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable to="/perfilusuario">
                <q-item-section>Meu Perfil</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Trocar Usuário</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Sair</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md">
      <q-table
        title="Exercícios de Hoje"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[0]"
      />
    </div>
    <q-circular-progress
      show-value
      font-size="12px"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ value }}%
    </q-circular-progress>
    <!--<q-linear-progress stripe rounded size="20px" color="red" class="q-mt-sm" />
      <q-btn
      class="full-width"
      label="Rotina Semanal"
      style="background: #11f500; color: black"
      />
      -->
    <q-footer>
        <a-menu/>
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from "vue";
import AMenu from "components/AMenu";

const columns = [
  {
    name: "name",
    required: true,
    label: "Descrição do Exercício",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    //sortable: true
  },
  { name: "videos", align: "left", label: "Exemplos", field: "videos" },
  { name: "series", align: "center", label: "Séries", field: "series" },
  { name: "repetições", align: "center", label: "Repetições", field: "rep" },
  { name: "carga", align: "center", label: "Carga", field: "carga" },
  {
    name: "intervalo",
    align: "center",
    label: "Intervalo",
    field: "intervalo",
  },
  { name: "checkbox", align: "center", label: "Checkbox", field: "checkbox" },
];

const rows = [
  {
    //videos: src='https://cdn.quasar.dev/img/boy-avatar.png',
    name: "Supino Máquina",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
  {
    name: "Leg Press Horizontal",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
  {
    name: "Puxada Alta",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
  {
    name: "Mesa Flexora",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
  {
    name: "Abdominal",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
  {
    name: "Extenção de Quadril",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
  {
    name: "Rosca Bícipes",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
  {
    name: "Trícipes Polia",
    series: "2 - 3",
    rep: "10 - 15",
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído",
  },
];

export default {
  components: {
    AMenu,
  },
  setup() {
    return {
      columns,
      rows,
      value: 81
    };
  },
};
</script>
