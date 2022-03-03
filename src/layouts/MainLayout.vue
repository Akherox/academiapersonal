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
  name: "MainLayout",
  mounted() {
    this.$store.dispatch("usuario/carregarToken").catch((error) => {
      this.$router.push("/login");
    });
  },
};
</script>
<style scoped>
/* .fundo {
  background: url(~assets/AP-Principal.png) center center no-repeat fixed;
  background-size: cover;
} */
</style>
