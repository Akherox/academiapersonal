<template>
  <q-page padding class="center" style="max-width: 400px">
    <q-form class="q-pa-md q-gutter-md" @submit.prevent="entrar()">
      <h3></h3>
      <div class="flex justify-center">
        <q-img
          class="q-mb-xl"
          style="max-width: 180px"
          src="~/assets/Logo.png"
        />
      </div>
      <q-input
        filled
        v-model="text"
        hint="Usuário"
        :dense="dense"
        style="color: white"
      />
      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Insira sua Senha"
        style="color: white"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="q-pa-sm">
        <q-checkbox
          v-model="right"
          label="Manter-me logado"
          style="color: white"
        />
      </div>

      <div >
        <div class="q-col-gutter-y-md">
          <div class="row">
              <a-btn
                type="submit"
                label="Fazer Login"
              />
          </div>

          <div class="row q-col-gutter-md">
            <div class="col">
              <q-btn
                push
                class="full-width glossy flex justify-center"
                label="Esqueci a Senha"
                style="color: white"
                to="/senha/recuperar"
              />
            </div>
            <div class="col">
              <q-btn
                push
                class="full-width glossy flex justify-center"
                label="Cadastrar"
                style="color: white"
                to="/cadastro"
              />
            </div>
          </div>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import ABtn from "components/ABtn.vue";


export default {
  components: {
    ABtn,
  },

  data () {
    return {
      password: '123',
       isPwd: true,
      text: 'usuario@email.com',
      dense: false,
      right: false,
    }
  },
  methods: {    
    entrar() {
      this.$store.dispatch('usuario/logar', {
        email: this.text,
        senha: this.password,
      }).then((r) => {
       this.$router.push('/');
      });
    }
  }
};
</script>
