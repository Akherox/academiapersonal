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

    <h3></h3>
    <div class="flex justify-center">
      <q-img class="q-mb-xl" style="max-width: 180px" src="~/assets/Logo.png" />
    </div>
    <q-list dark separator>
      <q-item>
        <q-item-section class="q-mb-xl flex-center">
          <q-avatar rounded size="100px">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label style="color: #11f500">Nome</q-item-label>
          <q-input v-model="form.nome" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label style="color: #11f500">Email </q-item-label>
          <q-input v-model="form.email" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label style="color: #11f500">Nascimento</q-item-label>
          <q-input v-model="form.data" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label style="color: #11f500">Genero</q-item-label>
          <q-input v-model="form.genero" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label style="color: #11f500">Objetivo</q-item-label>
          <q-input v-model="form.objetivo" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label style="color: #11f500">Nivel</q-item-label>
          <q-input v-model="form.nivel" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label style="color: #11f500">Frase</q-item-label>
          <q-input v-model="form.frase" />
        </q-item-section>
      </q-item>
      <a-btn label="Editar" @click="alterar()" />
    </q-list>

    <q-footer>
      <a-menu />
    </q-footer>
  </q-page>
</template>

<script>
import AMenu from "components/AMenu";
import ABtn from "components/ABtn";

export default {
  components: {
    AMenu,
    ABtn,
  },
  data() {
    return {
      mobileData: (false),
      bluetooth: (true),
      form: {
        nome: "",
        email: "",
        data: "",
        genero: "",
        objetivo: "",
        nivel: "",
        frase: "",
      },
    };
  },
  computed: {
    usuario() {
      return this.$store.state.usuario.usuario;
    },
  },
  methods: {
    alterar() {
      var dados = {
        id: this.usuario.id,
        ...this.form,
      };
      this.$store
        .dispatch("usuarios/alterar", dados)
        .then((resp) => {
          this.$q.notify({
            message: "Alterado com sucesso!",
            color: "positive",
          });
        })
        .catch((erro) => {
          var mensagens = erro.response.data;
          for (var campo in mensagens) {
            for (var msg in mensagens[campo]) {
              this.$q.notify({
                message: `Erro ${campo}: ${mensagens[campo][msg]}`,
                color: "negative",
              });
            }
          }
        });
    },
  },
  mounted() {
    this.form = this.usuario;
  },
};
</script>
