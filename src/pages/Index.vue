<template>
  <q-page class="flex flex-center column items-stretch" padding>
    <h2>Avance do Projeto</h2>
    <q-btn color="green" label="Login" to="/login" class="q-my-md"/>
    <q-btn color="green" label="Cadastro" to="/cadastro" class="q-my-md"/>
    <q-btn color="green" label="CadastroSucesso" to="/cadastrosucesso" class="q-my-md"/>
    <q-btn color="green" label="CriarPerfil" to="/criarperfil" class="q-my-md"/>
    <q-btn color="green" label="RecSenha1" to="/mailrecuperarsenha" class="q-my-md"/>
    <q-btn color="green" label="RecSenha2" to="/codigorecuperarsenha" class="q-my-md"/>
    <q-btn color="black" label="IMC-Professor" to="/imcprofessor" class="q-my-md"/>
    <q-btn color="black" label="Lista" to="/lista" class="q-my-md"/>
    <q-btn color="black" label="Lista-Cadastro" to="/listacadastro" class="q-my-md"/>
    <q-btn color="black" label="ListaMercado" to="/listamercado" class="q-my-md"/>
    <q-btn color="green" label="ListaExercicios" to="/listaexercicios" class="q-my-md"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
