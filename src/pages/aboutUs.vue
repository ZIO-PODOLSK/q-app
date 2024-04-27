<template>
  <q-layout>
    <!-- <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Корпорация 1Т
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="На главную" />
        <q-route-tab to="/1T" label="1T Corporation" />
        <q-route-tab disabled to="/page3" label="Не входить" />
      </q-tabs>
    </q-header> -->

    <q-page-container class="flex flex-center row q-ma-md">
        <div class="col">
          <h5>
            Корпорация российских инновационных предприятий малого бизнеса
          </h5>
          <h6>
            Наши участники объединяют усилия на основе добровольной кооперации
            для того, чтобы создать прекрасный и безопасный цифровой мир, в
            котором люди и организации будут свободны для личной,
            профессиональной и общественной самореализации при помощи удобных и
            эффективных ИТ- инструментов
          </h6>
        </div>
        <div class="col">
          <img
            src="https://1t.ru/wp-content/themes/one_t/assets/images/about-1-1000.jpg"
            alt="logo"
            width="500"
          />
        </div>
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: "1T",
});
</script>
