<template>
  <q-page padding>
    <q-header>
      <q-toolbar style="color: black">
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="settings">
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Configurações</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Usuario</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  to="/login"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
   <!-- <q-btn color="green" label="⇦" to="/" class="q-my-sm" />-->
    <h3>Serie</h3>

    <div class="q-pa-md" style="max-width: 400px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <div class="q-pa-sm">
    <div class="q-gutter-sm">
      <q-checkbox v-model="curlcombarra" color="green" />
    </div>
  </div>
        <!--  <q-avatar color="primary" text-color="white" square icon="check" />-->
        </q-item-section>
        <q-item-section>
          <q-item-label >Curl com barra</q-item-label>
          <q-item-label overline>3 x 15-20 (35 carga)</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <div class="q-pa-sm">
    <div class="q-gutter-sm">
      <q-checkbox v-model="curlcombarraagarre" color="green" />
    </div>
  </div>
         <!-- <q-avatar color="primary" text-color="white" square icon="check" />-->
        </q-item-section>
        <q-item-section>
          <q-item-label >Curl com barra agarre afastado</q-item-label>
          <q-item-label overline>3 x 15-20 (35 carga)</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <div class="q-pa-sm">
    <div class="q-gutter-sm">
      <q-checkbox v-model="curlcombarraez" color="green" />
    </div>
  </div>
          <!--<q-avatar color="primary" text-color="white" square icon="check" />-->
        </q-item-section>
        <q-item-section>
          <q-item-label >Curl com barra ez</q-item-label>
          <q-item-label overline>3 x 15-20 (35 carga)</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

    <q-footer >
        <a-menu/>
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import AMenu from 'components/AMenu';
export default {
  components: { AMenu },
  // name: 'PageName',
  setup(){
    return {
      curlcombarra: ref(true),
      curlcombarraagarre: ref(true),
      curlcombarraez: ref(true),
      mobileData: ref(true),
      bluetooth: ref(false),
    }
  }
};
</script>
