<template>
  <q-layout class="fondo" view="lHh Lpr lFf">
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
  name: "SenhaLayout"
};
</script>
<style scoped>
.fondo {
  background: url(~assets/Fondo-Mulher.png) top center no-repeat;
  background-size: cover;
}
</style>
