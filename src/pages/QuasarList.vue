<template>
  <div class="wrap">
    <q-card class="clock_card q-ma-md q-pa-xs flex flex-center">
      <h6>Справочник по компонентам Quasar</h6></q-card
    >
    <q-card>
      <q-chip :class="{ square: selection }">Элемент chip</q-chip>
      <q-checkbox v-model="selection" val="red" label="Скруглить" color="red" />
      <q-chip color="primary" text-color="white" icon="event">
        Add to calendar
      </q-chip>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selection = ref(false);
</script>
