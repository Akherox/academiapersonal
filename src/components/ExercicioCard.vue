<template>
  <q-card class="my-card" flat bordered v-if="exercicio != null">
    <q-card-section
      horizontal
      style="background: radial-gradient(circle, #1d1d1d 30%, #1b5e20 100%)"
    >
      <q-card-section horizontal class="q-pt-xs">
        <q-card-section class="col-6">
          <q-video :src="exercicio.video" />
        </q-card-section>
        <q-card-actions vertical class="justify-around q-px-md">
          <q-item-section>
            <q-item-label>{{ exercicio.tipo }}</q-item-label>
          </q-item-section>
        </q-card-actions>
        <q-item-section class="absolute-top-right">
          <q-checkbox
            size="lg"
            :modelValue="selecionado"
            @update:modelValue="$emit('update:selecionado', $event)"
          />
        </q-item-section>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    exercicio: Object,
    selecionado: Boolean,
  },
  emits: ["update:selecionado"],
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 470px
</style>
