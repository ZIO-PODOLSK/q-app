<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="q-pl-xl q-pt-sm">
          <div class="text-h4 grad text-bold">Волшебная тудушка</div>
          <p class="text-subtitle">{{ formattedString }}</p>
        </div>

        <div class="col text-center">
          <!-- <q-btn @click="justBtn">{{ formattedString }}</q-btn> -->
        </div>

        <q-toggle icon="light_mode" v-model="mode" color="blue" />
        <!-- <q-avatar icon="light_mode"></q-avatar> -->
        <q-avatar class="q-pl-md q-pr-xl"
          ><q-img
            v-on:mousemove="itsMouse"
            src="https://cdn.quasar.dev/img/avatar.png"
        /></q-avatar>
        <div class="text-subtitle">Владислав</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered breakpoint="500">
      <q-list>
        <q-item-label header> Главное меню </q-item-label>

        <!-- <EssentialLink -->
        <router-link
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          :to="link.link"
          ><EssentialLink v-bind="link"
        /></router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
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
        </q-knob
      ></q-card>

      <q-card class="clock_card q-ma-md col text-center">
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
        </q-knob>
      </q-card>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";
import { Dialog } from "quasar";

defineOptions({
  name: "MainLayout",
});

const vali = ref();

const linksList = [
  {
    title: "todo",
    caption: "toDo лист",
    icon: "list",
    link: "/todoList",
  },
  {
    title: "help",
    caption: "Помощь",
    icon: "help_outline",
    link: "/Help",
  },
  {
    title: "about us",
    caption: "о нас",
    icon: "chat",
    link: "/AboutUs",
  },
  {
    title: "contacts",
    caption: "Контакты",
    icon: "contacts",
    link: "/contacts",
  },
];

const mode = ref(true);
const leftDrawerOpen = ref(true);

const HH = ref(0);
const mm = ref(0);
const ss = ref(0);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// const justBtn = () => alert("Это просто кнопка");
// const itsMouse = () => alert("Мышь!");

const itsMouse = () => {
  $q.dialog({
    title: "Alert<em>!</em>",
    message: "МЫШЬ!",
  });
};

//вычисления
let formattedString = ref("");

setInterval(() => {
  formattedString.value = date.formatDate(Date.now(), "DD MMMM YYYY HH:mm:ss");
  HH.value = date.formatDate(Date.now(), "HH");
  mm.value = date.formatDate(Date.now(), "mm");
  ss.value = date.formatDate(Date.now(), "ss");
}, 1000);
</script>

<style scoped>
.clock_card {
  max-width: 250px;
}

.fc {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grad {
  background: red;
  background: -webkit-linear-gradient(
    left,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: -o-linear-gradient(
    right,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: -moz-linear-gradient(
    right,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: linear-gradient(
    to right,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>