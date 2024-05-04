<template>
  <q-page class="column">
    <div class="row q-pa-sm">
      <q-input @keyup.enter="addTask" class="col" outlined v-model="mess" label="Добавить задачу">
        <template v-slot:append>
          <q-btn
            v-on:click="addTask"
            round
            dense
            flat
            icon="add"
          /> </template
      ></q-input>
    </div>

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
    <div class="no-task absolute-center" v-if="!tasks.length"><div><q-icon class="q-pa-xl" name="auto_stories"/>задач нет</div></div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const addTask = () => {
  tasks.value.push({
    title: mess.value,
    done: false
  })
  mess.value = "";
};

const mess = ref("");
const tasks = ref([
  // { title: "Задача 1", done: false },
  // { title: "Задача 2", done: false },
  // { title: "Задача 3", done: false },
]);
// const color = ref("red");

const $q = useQuasar();
const delTask = (ind) => {
  $q.dialog({
    title: "Confirm",
    message: "Would you like to turn on the wifi?",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    tasks.value.splice(ind, 1);
    $q.notify(`Удалена строка {{ind+1}}`);
  });
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
.no-task{
  color: grey;
  opacity: 0.3;
  font-size: 5rem;
}
</style>