<template>
  <q-page padding>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm" />
    <q-header>
      <q-toolbar style="color: black">
        <q-btn flat round dense icon="arrow_back_ios_new" to="/home" />
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable to="/perfilusuario">
                <q-item-section>Perfil Usuario</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <h3>Exercicios do Dia</h3>
    <q-item>
        <q-item-section top avatar>
          <q-avatar rounded>
            <img src="https://www.treinus.com.br/blog/wp-content/uploads/2020/05/tipos-de-exercicios-f%C3%ADsicos.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon name="star" />
            <q-icon name="star" />
            <q-icon name="star" />
          </div>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon name="star" />
            <q-icon name="star" />
            <q-icon name="star" />
          </div>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon name="star" />
            <q-icon name="star" />
            <q-icon name="star" />
          </div>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    
    <q-checkbox size="lg" v-model="shape" val="lg" label="Completado" />
    <q-linear-progress stripe rounded size="20px" :value="progress2" color="red" class="q-mt-sm" />
      <q-btn
      class="full-width"
      label="Rutina Semanal"
      style="background: #11f500; color: black"
      />
    <q-footer style="color: black">
      <q-tabs>
        <q-route-tab icon="fact_check" label="Lista" to="/listaexercicios" />
        <q-route-tab icon="home" label="Home" to="/home" />
        <q-route-tab icon="fitness_center" label="Serie" to="/serieexercicio" />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      shape: ref(['line']),
      progress2: 0.725
    }
  }
}
</script>
