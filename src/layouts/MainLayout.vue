<template>
  <q-layout view="hHh Lpr fff" class="bg-grey-3">
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

        <div class="col text-center"></div>

        <q-toggle icon="light_mode" v-model="mode" color="blue" />
        <q-avatar class="q-pl-md q-pr-xl"
          ><q-img
            v-on:mousemove="itsMouse"
            src="https://cdn.quasar.dev/img/avatar.png"
        /></q-avatar>
        <div class="text-subtitle">Владислав</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" class="bg-grey-4">
      <q-list>
        <router-link
          v-for="link in linksList"
          :key="link.title"
          :to="link.link"
        >
          <EssentialLink v-bind="link" />
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <keep-alive> -->
      <router-view />
      <!-- </keep-alive> -->
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";
import { Dialog } from "quasar";
import { useQuasar } from "quasar";

defineOptions({
  name: "MainLayout",
});

const vali = ref();

const linksList = [
  {
    title: "На главную",
    icon: "login",
    link: "/",
  },
  {
    title: "Тудушка",
    icon: "list",
    link: "/todoList",
  },
  {
    title: "Помощь",
    caption: "help",
    icon: "help_outline",
    link: "/Help",
  },
  {
    title: "О нас",
    caption: "about us",
    icon: "img:src/img/logo.svg",
    link: "/AboutUs",
  },
  {
    title: "Контакты",
    caption: "contacts",
    icon: "groups",
    link: "/contacts",
  },
  {
    title: "Весёлая наркомания",
    caption: "happy",
    icon: "sos",
    link: "/happyList",
  },
  {
    title: "Справочник по Quasar",
    caption: "quasar",
    icon: "book",
    link: "/quasar",
  },
];

const mode = ref(true);
const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const $q = useQuasar();
const itsMouse = () => {
  $q.notify("МЫШЬ!");
};

//вычисления
const formattedString = ref("");
const HH = ref(0);
const mm = ref(0);
const ss = ref(0);

setInterval(() => {
  formattedString.value = date.formatDate(Date.now(), "DD MMMM YYYY HH:mm:ss");
  HH.value = date.formatDate(Date.now(), "HH");
  mm.value = date.formatDate(Date.now(), "mm");
  ss.value = date.formatDate(Date.now(), "ss");
}, 1000);
</script>

<style scoped>
.fc {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clock_card {
  max-width: 250px;
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