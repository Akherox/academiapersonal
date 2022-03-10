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
        v-model="form.model1"
        :options="form.options1"
        label="Genero"
      />
      <q-input class="col" dark v-model="form.peso" label="Peso" />
      <q-input class="col" dark v-model="form.objetivo" label="Objetivo" />
      <q-select
        class="col"
        dark
        v-model="form.model2"
        :options="form.options2"
        label="Nivel"
      />
      <!-- <q-input
        class="col"
        dark
        v-model="time"
        filled
        type="time"
        label="Tempo disponivel"
        stack-label
      /> -->
      <q-input
        class="col"
        dark
        v-model="form.text"
        label="Frase inspiradora e motivacional"
        filled
        type="textarea"
      />
       <q-input
        class="col"
        dark
        v-model="form.senha"
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
      text: "",
      peso: "",
      objetivo: "",
      model1: (null),
      model2: (null),
      options1: ["Masculino", "Feminino"],
      options2: ["Principiante", "Intermediario", "Avançado", "Hard Work"],
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
          
        })
      }
    }
  }
};
</script>
