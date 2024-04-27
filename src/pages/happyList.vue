<template>
  <q-layout class="bg-grey-3">
    <h5 class="q-ma-md">Страничка весёлой наркомании</h5>
    <q-card class="clock_card q-ma-md">
      <q-knob
        :min="0"
        :max="23"
        :inner-min="1"
        v-model="HH"
        show-value
        size="50px"
        :thickness="0.3"
        color="blue-10"
        track-color="grey-3"
        class="q-ma-md"
      >
      </q-knob>

      <q-knob
        :min="0"
        :max="59"
        :inner-min="1"
        v-model="mm"
        show-value
        size="50px"
        :thickness="0.3"
        color="blue-10"
        track-color="grey-3"
        class="q-ma-md"
      >
      </q-knob>

      <q-knob
        :min="0"
        :max="59"
        v-model="ss"
        show-value
        size="50px"
        :thickness="0.3"
        color="blue-10"
        track-color="grey-3"
        class="q-ma-md"
      >
      </q-knob>
    </q-card>

    <q-card class="clock_card q-ma-md flex flex-center">
      <q-knob
        :min="0"
        :max="59"
        :inner-min="1"
        v-model="ss"
        show-value
        size="150px"
        :thickness="0.2"
        color="green"
        track-color="grey-3"
        class="q-ma-md"
      >
        <q-knob
          :min="0"
          :max="59"
          :inner-min="1"
          v-model="mm"
          show-value
          size="100px"
          :thickness="0.35"
          color="yellow"
          track-color="grey-3"
          class="q-ma-md"
        >
          <q-knob
            :min="0"
            :max="23"
            :inner-min="1"
            v-model="HH"
            show-value
            size="50px"
            :thickness="1"
            color="red"
            track-color="grey-3"
            class="q-ma-md"
          >
          </q-knob>
        </q-knob>
      </q-knob> </q-card
  ></q-layout>
</template>


<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";
import { Dialog } from "quasar";

//вычисления
// const formattedString = ref("");
const HH = ref(0);
const mm = ref(0);
const ss = ref(0);

setInterval(() => {
  // formattedString.value = date.formatDate(Date.now(), "DD MMMM YYYY HH:mm:ss");
  HH.value = date.formatDate(Date.now(), "HH");
  mm.value = date.formatDate(Date.now(), "mm");
  ss.value = date.formatDate(Date.now(), "ss");
}, 1000);
</script>

<style scoped>
.clock_card {
  max-width: 250px;
}
</style>