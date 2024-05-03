<template>
  <q-page class="column">
    <q-list separator bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.id"
        tag="label"
        v-ripple
        :class="{ 'done bg-green-1': task.done }"
      >
        <q-item-section avatar clickable @click="task.done = !task.done">
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            val="teal"
            color="green"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>

        <q-item-section v-if="task.done">
          <q-btn
            @click.stop="delTask(index)"
            outline
            round
            color="primary"
            icon="card_giftcard"
            class="del_btn"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const tasks = ref([
  { title: "Задача 1", done: false },
  { title: "Задача 2", done: false },
  { title: "Задача 3", done: false },
]);
// const color = ref("red");

const delTask = (ind) => {
  tasks.value.splice(ind, 1);
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}

.del_btn {
  width: 42px;
  align-self: flex-end;
  color: red;
}
</style>