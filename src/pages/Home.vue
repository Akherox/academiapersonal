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
              <q-item clickable to="/login">
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
                 :rows-per-page-options="[0]"/>
        </div>
    <q-footer style="color: black">
      <q-tabs align="justify">
        <q-route-tab icon="fact_check" label="Lista" to="/listaexercicios"/>
        <q-route-tab icon="home" label="Home" to="/home"/>
        <q-route-tab icon="fitness_center" label="Serie" to="/serieexercicio"/>
        </q-tabs>
        </q-footer>
    <q-footer>
      <q-tabs class="text-black">
        <a-menu/>
        

      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Descrição do Exercício',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    //sortable: true
  },
  { name: 'videos', align: 'left', label: 'Exemplos', field: 'videos' },
  { name: 'series', align: 'center', label: 'Séries', field: 'series' },
  { name: 'repetições', align: 'center', label: 'Repetições', field: 'rep' },
  { name: 'carga', align: 'center', label: 'Carga', field: 'carga' },
  { name: 'intervalo', align: 'center', label: 'Intervalo', field: 'intervalo' },
  { name: 'checkbox', align: 'center', label: 'Checkbox', field: 'checkbox' }
]

const rows = [
  {
    //videos: src='https://cdn.quasar.dev/img/boy-avatar.png',
    name: 'Supino Máquina',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
        
  },
  {
    name: 'Leg Press Horizontal',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
  },
  {
    name: 'Puxada Alta',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
  },
  {
    name: 'Mesa Flexora',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
  },
  {
    name: 'Abdominal',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
  },
  {
    name: 'Extenção de Quadril',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
  },
  {
    name: 'Rosca Bícipes',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
  },
  {
    name: 'Trícipes Polia',
    series: '2 - 3',
    rep: '10 - 15',
    carga: "Leve - Moderada",
    intervalo: "60 Seg",
    checkbox: "Concluído"
  }
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}

</script>
