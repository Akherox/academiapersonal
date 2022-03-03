<template>
  <q-card class="my-card" flat bordered v-if="exercicio != null">
    <q-card-section
      horizontal
      style="background: radial-gradient(circle, #1d1d1d 30%, #1b5e20 100%)"
    >
      <q-card-section horizontal class="q-pt-xs">
        <q-card-section class="col">
          <q-video :src="exercicio.video" />
          <h3 style="font-size: 2rem">{{ exercicio.nome }}</h3>
           <q-item-label>{{ exercicio.descricao }}</q-item-label>
        </q-card-section>
        <!-- <q-card-actions vertical class="justify-around q-px-md">
         <q-item-section class="absolute-top-right">
          <q-checkbox
            size="lg"
            :modelValue="selecionado"
            @update:modelValue="$emit('update:selecionado', $event)"
          />
        </q-item-section> 
        </q-card-actions> -->
        
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["exercicio", "selecionado"],

  emits: ["update:selecionado"],
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 470px
</style>
