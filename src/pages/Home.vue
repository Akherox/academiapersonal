<template>
  <q-page padding>
    <a-header>
    </a-header>

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
          img-src="data:image/jpeg;base64,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"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://img.freepik.com/vetores-gratis/centro-de-treinamento-de-fitness-de-academia-postar-pagina-de-capa-do-facebook_178490-85.jpg?size=626&ext=jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-and-fitness-facebook-cover-advertising-te-design-template-ac1243e180d670f56a4e31a3950307fc_screen.jpg?ts=1619300876"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://i.pinimg.com/736x/d7/4c/ec/d74cec18fd4ac5bf164e84940b6fbb36.jpg"
        />
      </q-carousel>
    </div>
    <a4> Recomendação de hoje </a4>

    <q-list boredered separator>
      <q-item clickable v-ripple>
        <q-avatar color="black" text-color="white"> A </q-avatar>
        <q-item-section> Treino INICIANTE </q-item-section>
        <q-item-section avatar>
          <q-btn flat round dense icon="send">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-checkbox
                    v-model="exerciciomatutina1"
                    true-value="exercicio matutina 1"
                    ><q-item-section>Exercicio 1</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciomatutina2"
                    true-value="exercicio matutina 2"
                    ><q-item-section>Exercicio 2</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciomatutina3"
                    true-value="exercicio matutina 3"
                    ><q-item-section>Exercicio 3</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciomatutina4"
                    true-value="exercicio matutina 4"
                    ><q-item-section>Exercicio 4</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciomatutina5"
                    true-value="exercicio matutina 5"
                    ><q-item-section>Exercicio 5</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciomatutina6"
                    true-value="exercicio matutina 6"
                    ><q-item-section>Exercicio 6</q-item-section></q-checkbox
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>

      <a3> Subir nivel </a3>

      <q-item clickable v-ripple>
        <q-avatar color="black" text-color="white"> B </q-avatar>
        <q-item-section class="center-justify">
          Treino INTERMEDIARIO
        </q-item-section>
        <q-item-section avatar>
          <q-btn flat round dense icon="send">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list style="min-width: 100px">
                <q-item>
                  <q-checkbox
                    v-model="exerciciodiario1"
                    true-value="exercicio diario 1"
                    ><q-item-section>Exercicio 1</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciodiario2"
                    true-value="exercicio diario 2"
                    ><q-item-section>Exercicio 2</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciodiario3"
                    true-value="exercicio diario 3"
                    ><q-item-section>Exercicio 3</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciodiario4"
                    true-value="exercicio diario 4"
                    ><q-item-section>Exercicio 4</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciodiario5"
                    true-value="exercicio diario 5"
                    ><q-item-section>Exercicio 5</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exerciciodiario6"
                    true-value="exercicio diario 6"
                    ><q-item-section>Exercicio 6</q-item-section></q-checkbox
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-avatar color="black" text-color="white"> C </q-avatar>
        <q-item-section> Treino AVANÇADO </q-item-section>
        <q-item-section avatar>
          <q-btn flat round dense icon="send">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list style="min-width: 100px">
                <q-item>
                  <q-checkbox
                    v-model="exercicionocturna1"
                    true-value="exercicio nocturna 1"
                    ><q-item-section>Exercicio 1</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exercicionocturna2"
                    true-value="exercicio nocturna 2"
                    ><q-item-section>Exercicio 2</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exercicionocturna3"
                    true-value="exercicio nocturna 3"
                    ><q-item-section>Exercicio 3</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exercicionocturna4"
                    true-value="exercicio nocturna 4"
                    ><q-item-section>Exercicio 4</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exercicionocturna5"
                    true-value="exercicio nocturna 5"
                    ><q-item-section>Exercicio 5</q-item-section></q-checkbox
                  >
                </q-item>
                <q-item clickable to="/">
                  <q-checkbox
                    v-model="exercicionocturna6"
                    true-value="exercicio nocturna 6"
                    ><q-item-section>Exercicio 6</q-item-section></q-checkbox
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-avatar color="black" text-color="white"> C </q-avatar>
        <q-item-section> Treino EXTREMADAMENTE AVANÇADO </q-item-section>
        <q-item-section avatar>
          <q-btn flat round dense icon="send"> </q-btn>
        </q-item-section>
      </q-item>
    </q-list>

    <div>
      <apexchart :options="options" :series="series"></apexchart>
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
import AHeader from "components/AHeader"

const options = ref({
  chart: {
    foreColor: "#fff",
    height: 280,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: "TOTAL",
        },
      },
    },
  },
  labels: ["TEAM A", "TEAM B", "TEAM C", "TEAM D"],
});
const series = ref([67, 84, 97, 61]);

export default {
  name: "Page Index",
  components: {
    AMenu,
    AHeader,
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
      left: ref(true),
      right: ref(false),
      acceptAgreement: ref(false),
      subscribeNewsletter: ref(null),
      exerciciodiario1: ref("exercicio diario 1"),
      exerciciodiario2: ref("exercicio diario 2"),
      exerciciodiario3: ref("exercicio diario 3"),
      exerciciodiario4: ref("exercicio diario 4"),
      exerciciodiario5: ref("exercicio diario 5"),
      exerciciodiario6: ref("exercicio diario 6"),
      exercicionocturna1: ref("exercicio nocturna 1"),
      exercicionocturna2: ref("exercicio nocturna 2"),
      exercicionocturna3: ref("exercicio nocturna 3"),
      exercicionocturna4: ref("exercicio nocturna 4"),
      exercicionocturna5: ref("exercicio nocturna 5"),
      exercicionocturna6: ref("exercicio nocturna 6"),
      exerciciomatutina1: ref("exercicio matutina 1"),
      exerciciomatutina2: ref("exercicio matutina 2"),
      exerciciomatutina3: ref("exercicio matutina 3"),
      exerciciomatutina4: ref("exercicio matutina 4"),
      exerciciomatutina5: ref("exercicio matutina 5"),
      exerciciomatutina6: ref("exercicio matutina 6"),
    };
  },
};
</script>
