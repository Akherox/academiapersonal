<template>
  <q-page padding>
    <q-header>
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" to="/games" />
         <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="edit" :to="`/games/${game.id}/edit`" />
      </q-toolbar>
    </q-header>

    <h2 class="q-mt-md">{{ game.nome }}</h2>
    <p><b>Categoria: </b> {{ game.categoria.nome }}</p>
    <p><b>Lançamento: </b> {{ game.dataLancamento }}</p>
    <p><b>Preço: </b> {{ game.preco }}</p>
    <p><b>Horas Jogadas: </b> {{ game.horasJogadas }}</p>
    <p><b>Concluído: </b> {{ game.concluido }}</p>
    <p><b>Último Jogo: </b> {{ game.dataUltimoJogo }}</p>
    <p>
      <b>Avaliação: </b>
      <q-rating v-model="game.avaliacao" size="2em" :max="5" color="primary" />
    </p>
    <p><b>Comentário: </b> {{ game.comentario }}</p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {};
  },
  computed: {
    game() {
      return this.$store.state.games.game;
    }
  },
  mounted() {
    var id = this.$route.params.id;
    this.$store.dispatch("games/carregar", id);
  }
};
</script>