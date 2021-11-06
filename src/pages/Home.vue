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
              <q-item clickable to="/">
                <q-item-section>Sair</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md">
      <q-carousel
        height="160px"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>

    <q-list boredered separator>
      <q-item clickable v-ripple>
        <q-avatar color="black" text-color="white"> A </q-avatar>
        <q-item-section> Serie Matutina</q-item-section>
        <q-item-section avatar>
          <q-btn flat round dense icon="send">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable to="/perfilusuario">
              <q-checkbox><q-item-section>Exercicio 1</q-item-section></q-checkbox>               
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 2</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/perfilusuario">
                <q-checkbox><q-item-section>Exercicio 3</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 4</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/perfilusuario">
                <q-checkbox><q-item-section>Exercicio 5</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 6</q-item-section></q-checkbox>  
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-avatar color="black" text-color="white"> B </q-avatar>
        <q-item-section class="center-justify"> Serie Diaria</q-item-section>
        <q-item-section avatar>
          <q-btn flat round dense icon="send">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable to="/perfilusuario">
              <q-checkbox><q-item-section>Exercicio 1</q-item-section></q-checkbox>               
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 2</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/perfilusuario">
                <q-checkbox><q-item-section>Exercicio 3</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 4</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/perfilusuario">
                <q-checkbox><q-item-section>Exercicio 5</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 6</q-item-section></q-checkbox>  
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-avatar color="black" text-color="white"> C </q-avatar>
        <q-item-section> Serie Nocturna</q-item-section>
        <q-item-section avatar>
          <q-btn flat round dense icon="send">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable to="/perfilusuario">
              <q-checkbox><q-item-section>Exercicio 1</q-item-section></q-checkbox>               
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 2</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/perfilusuario">
                <q-checkbox><q-item-section>Exercicio 3</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 4</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/perfilusuario">
                <q-checkbox><q-item-section>Exercicio 5</q-item-section></q-checkbox>  
              </q-item>
              <q-item clickable to="/">
                <q-checkbox><q-item-section>Exercicio 6</q-item-section></q-checkbox>  
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
    
    <div>
      <apexchart  
        :options="options"
        :series="series"
      ></apexchart>
    </div>

    <!-- <q-circular-progress
    <q-item-section avatar>
          <q-icon color="primary" name="send" />
        </q-item-section>
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
    </q-circular-progress> -->

    <q-footer>
      <a-menu />
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from "vue";
import AMenu from "components/AMenu";
const options = ref({
   chart: {
    foreColor: '#fff',
    height: 280,
    type: "radialBar" ,
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: 'TOTAL'
        }
      }
    }
  },
  labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
});
const series = ref([67, 84, 97, 61]);

export default {
  name: "Page Index",
  components: {
    AMenu,
  },
  setup() {
    return {
      // columns,
      // rows,
      // value: 81
      slide: ref(1),
      autoplay: ref(true),
      options,
      series,
    };
  },
};
</script>
