<template>
  <div v-if="tasks.length === 0">
    <h1 class="text-white center">Задач пока нет</h1>
  </div>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ tasks.filter(task => task.status === 'active').length }}</h3>

    <!-- <div class="card">
      <h2 class="card-title">
        Название задачи
        <AppStatus :type="'done'"/>
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push('/task')" >Посмотреть</button>
    </div> -->
    <div class="card" v-for="task in tasks" :key="task">
      <!-- <p>id: {{task.id}}</p> -->
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'done'" :status="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            <!-- Дата: {{new Date().toLocaleDateString()}} -->
            {{ task.date }}
          </small>
        </strong>
      </p>
      <!-- <p>Описание: {{task.descr}}</p> -->
      <button class="btn primary" @click="$router.push('/task/' + task.id)">
        Посмотреть
      </button>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";

export default {
  data() {
    return {
      visible: false,
      counterOfActiveTasks: 0,
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  components: { AppStatus },
};
</script>
