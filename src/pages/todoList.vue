<template>
  <q-card class="clock_card q-ma-md q-pa-xs flex flex-center"
    ><h5>Страница тудушка</h5>
    <q-rating
      class="q-pa-md"
      v-model="ratingModel"
      size="1.5em"
      :max="7"
      color="primary"
    ></q-rating>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const ratingModel = ref(3);
</script>