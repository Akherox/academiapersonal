<template>
  <q-layout class="fundo" view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Academia Personal </q-toolbar-title>
        <div>By ALEX.008</div>
      </q-toolbar>
    </q-header> -->
    <q-page-container>
      
      <router-view />
    </q-page-container> 
  </q-layout>
</template>

<script>
export default {
  name: "LoginLayout"
};
</script>
<style scoped>
.fundo {
  background: url(~assets/Fondo.png) top center no-repeat;
  background-size: cover;
}
</style>
