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

    <h3>Perfil</h3>
    <q-item>
      <q-item-section>
        <q-avatar rounded size="100px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png"
        /></q-avatar>
      </q-item-section>
    </q-item>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-item>
        <q-item-section>
          <q-input
            filled
            v-model="name"
            label="Seu nome"
            hint="Digite seu nome"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatorio']"
          />
        </q-item-section>
      </q-item>
      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-input
            filled
            v-model="Sobrenome"
            label="Seu sobrenome"
            hint="Digite seu Sobrenome"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatorio']"
          />
        </q-item-section>
      </q-item>
      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-input
            class="col"
            label="Data de nascimento*"
            dark
            v-model="date"
            filled
            type="date"
            stack-label
            hint="Data de nascimento"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatorio']"
          />
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
          

      <q-item>
        <q-item-section>
          <q-input
            filled
            v-model="sexo"
            label="Seu sexo"
            hint="Digite sexo masculino ou feminino"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatorio']"
          />
        </q-item-section>
      </q-item>
      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-avatar rounded size="80px">
            <img
              src="https://www.treinus.com.br/blog/wp-content/uploads/2020/05/tipos-de-exercicios-f%C3%ADsicos.jpg"
            />
          </q-avatar>
          <q-input
            filled
            v-model="objetivo"
            label="Seu Objetivo"
            hint="Digite seu Objetivo Ex: Hipertrofia muscular"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo obrigatorio']"
          />
        </q-item-section>
      </q-item>

      <q-toggle v-model="accept" label="Eu aceito os termos" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>

    <q-footer>
      <a-menu />
    </q-footer>
    
  </q-page>
</template>



<script>
import { ref } from "vue";
import AMenu from "components/AMenu";
import { useQuasar } from "quasar";

export default {
  components: {
    AMenu,
  },
  setup() {
    const name = ref(null);
    const date = ref(null);
    const Sobrenome = ref(null);
    const sexo = ref(null);
    const objetivo = ref(null);


    const accept = ref(false);
    const $q = useQuasar();

    return {
      mobileData: ref(true),
      bluetooth: ref(false),
      
      model1: ref(null),
      time: ref(""),
      name,
      accept,
      date,
      Sobrenome,
      sexo,
      objetivo,

     onSubmit() {
    if (accept.value !== true) {
      $q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first",
      });
    } else {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
    }
  },
  onReset() {
    name.value = null;
    date.value = null;
    Sobrenome.value = null;
    sexo.value = null;
    objetivo.value = null;
    accept.value = false;
  },

    };

  },
  
};
</script>
