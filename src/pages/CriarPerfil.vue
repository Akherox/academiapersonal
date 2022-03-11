<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md text-center">
      <q-icon name="account_circle" style="font-size: 10rem; color: #11f500" />
    </div>
    <div class="q-pa-md q-gutter-md text-center" style="color: white">
      Foto perfil
    </div>
    <q-form class="q-pa-md q-gutter-md">
      <q-input class="col" dark v-model="form.nome" label="Nome" />
      <q-input class="col" dark v-model="form.email" label="E-mail" />
      <q-input class="col" dark v-model="form.cpf" label="CPF" />
      <q-input
        class="col"
        dark
        v-model="form.data"
        filled
        type="date"
        label="Data de Nacimento"
        stack-label
      />
      <q-select
        class="col"
        dark
        v-model="form.generoModel"
        :options="form.genero"
        label="Genero"
      />
      <q-input class="col" dark v-model="form.apelido" label="Apelido" />
      <q-select
        class="col"
        dark
        v-model="form.objetivoModel"
        :options="form.objetivo"
        label="Objetivo"
      />
      <q-select
        class="col"
        dark
        v-model="form.nivelModel"
        :options="form.nivel"
        label="Nivel"
      />
      <q-input
        class="col"
        dark
        v-model="form.frase"
        label="Frase inspiradora e motivacional"
        filled
        type="textarea"
      />
       <q-input
        class="col"
        dark
        v-model="form.senha"
        filled
        label="Senha"
      />
      <q-input
        class="col"
        dark
        v-model="form.confirmarsenha"
        filled
        label="Confirmar Senha"
      />
      <div class="row">
        <a-btn
          label="Prosseguir"
          @click="enviarForm()"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import ABtn from "components/ABtn.vue"

//this.$store.state.usuario.usuario
export default {
  components: {
    ABtn,
  },


  data() {
    return {
      form: {
      nome: "",
      email: "",
      cpf: "",
      data: "",
      senha: "",
      frase: "",
      apelido: "",
      confirmarsenha: "",
      generoModel: (null),
      objetivoModel: (null),
      nivelModel: (null),
      genero: ["Masculino", "Feminino"],
      objetivo: ["Perder Peso", "Ganhar Musculação"],
      nivel: ["Iniciante", "Intermediario", "Avançado"],
      }
    };
  },
  methods: {
    enviarForm() {
      var dados = {
        ...this.form,
      };
      if (this.form.senha == this.form.confirmarsenha){
        this.$store
        .dispatch("usuario/inserir", dados)
        .then((resp) => {
          this.$q.notify({
            message: "Cadastro efetuado com sucesso!",
            color: "positive",
          });
          this.$router.push("/");
        })
        .catch((erro) => {
          var message = erro.response.data;
          for (var campo in mensagens) {
            for (var msg in mensagens[campo]) {
              this.$q.notify({
                message: `Erro ${campo}: ${mensagens[campo][msg]}`,
                color: "negative",
              });
            }
          }        
        });
      }
      else {
        this.$q.notify({
          message: "As senhas não são idênticas",
          color: "negative",
        })
      }
    }
  }
};
</script>
