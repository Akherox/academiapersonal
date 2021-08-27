<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-toolbar-title class="center">Exercicios do Dia</q-toolbar-title>
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
    <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Supino Máquina 2-3 10-15 Leve-Moderada 60 Segundos
            <q-checkbox size="md" v-model="option1" val="lg" label="Completo"/>
            </q-item-label>
          <q-item-label></q-item-label>
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Leg Press Horizintal 2-3 10-15 Leve-Moderada 60 Segundos
            <q-checkbox size="md" v-model="option2" val="lg" label="Completo"/>
            </q-item-label>
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Puxada Alta 2-3 10-15 Leve-Moderada 60 Segundos
            <q-checkbox size="md" v-model="option3" val="lg" label="Completo"/>
            </q-item-label>
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Mesa Flexora 2-3 10-15 Leve-Moderada 60 Segundos
            <q-checkbox size="md" v-model="option4" val="lg" label="Completo"/>
            </q-item-label>
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Abdominal 2-3 10-15 Leve-Moderada 60 Segundos 
            <q-checkbox size="md" v-model="option5" val="lg" label="Completo"/>
            </q-item-label>
          
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Extensão de Quadril 2-3 10-15 Leve-Moderada 60 Segundos
            <q-checkbox size="md" v-model="option6" val="lg" label="Completo"/>
            </q-item-label>
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Rosca Bícipes 2-3 10-15 Leve-Moderada 60 Segundos
            <q-checkbox size="md" v-model="option7" val="lg" label="Completo"/>
            </q-item-label>
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
      <q-item>
        <q-item-section top avatar>
          <q-avatar rounded size="50px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            Trícipes Polia 2-3 10-15 Leve-Moderada 60 Segundos
            <q-checkbox size="md" v-model="option8" val="lg" label="Completo"/>
            </q-item-label>
        </q-item-section>

      </q-item>
      <q-separator spaced inset />
    <q-linear-progress stripe rounded size="20px" :value="progress2" color="red" class="q-mt-sm" />
      <q-btn
      class="full-width"
      label="Rotina Semanal"
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
      option1: ref(false),
      option2: ref(false),
      option3: ref(false),
      option4: ref(false),
      option5: ref(false),
      option6: ref(false),
      option7: ref(false),
      option8: ref(false),
      option9: ref(false),
      option10: ref(false),
      option11: ref(false),
      option12: ref(false),

      progress2: 0.725
    }
  }
}
</script>
