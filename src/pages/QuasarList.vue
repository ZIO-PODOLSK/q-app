<template>
  <div class="wrap">
    <q-card class="clock_card q-ma-md q-pa-xs flex flex-center">
      <h6>Справочник по компонентам Quasar</h6></q-card
    >
    <q-card class="clock_card q-ma-md q-pa-xs">
      <q-chip class="disable" icon="done_outline" clickable
        >Элемент chip</q-chip
      >
      <q-checkbox v-model="selection" val="red" label="rounded" color="red" />
      <q-chip color="primary" text-color="white" icon="event">
        Add to calendar
      </q-chip>
    </q-card>

    <div class="row">
      <div class="col-12 col-md absolute-center">.col-12 .col-md</div>
      <div class="col-12 col-md">.col-12 .col-md</div>
      <div class="col-12 col-md">.col-12 .col-md</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selection = ref(false);
</script>
