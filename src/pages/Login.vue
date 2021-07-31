<template>
  <q-page padding>
    <q-btn color="green" label="⇦" to="/" class="q-my-sm"/>
  <q-form class="q-pa-md q-gutter-md" style="max-width: 500px">

    <q-input standout v-model="text" label="Usuário" :dense="dense" style="color: white" />
    <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Insira sua Senha" style="color: white">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    
        <div class="q-pa-sm">
        
          <q-checkbox v-model="right" label="Mater-me logado" style="color: white" />
        </div>
        
         <div class="row">
            <div class="col q-col-gutter-y-md">
          <div class="row">
            <div class="col">
          <q-btn class="full-width" label="Fazer Login" style="background: #11F500; color: black" />
          </div>
          </div>
          
          <div class="row q-col-gutter-md"> 
            <div class="col">
            <q-btn class="full-width" label="Esqueci a Senha" style="color: white" />
            </div>
            <div class="col">
            <q-btn class="full-width" label="Cadastrar" style="color: white" />
          </div>
          </div>
           </div>
          </div>
          
        
      
    
  </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      password: ref(''),
      isPwd: ref(true),
      text: ref(''),
      dense: ref(false),
      right: ref(false)
    }
  }
}
</script>
