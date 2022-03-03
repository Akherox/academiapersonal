<template>
  <q-btn
    color="primary"
    label="Logout"
    push
    size="sm"
    v-close-popup
    @click="logout()"
  />
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("usuario/sair");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
