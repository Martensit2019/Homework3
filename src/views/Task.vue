<template>
  <div class="card">
    <h2>{{currentTask.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" :status = currentTask.status
    /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.date }}</p>
    <p><strong>Описание</strong>: {{ currentTask.descr }}</p>
    <div>
      <button class="btn" @click="gettowork">Взять в работу</button>
      <button class="btn primary" @click="complete">Завершить</button>
      <button class="btn danger" @click="cancel">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  props: ['taskId'],
  computed: {
    currentTask(){
      return this.$store.state.tasks.find(task => task.id == this.taskId)
    },
    gettowork() {
      this.$store.commit('changeStatus', {
        id: this.taskId,
        status: 'pending'
      } )
    },
    complete() {
      this.$store.commit('changeStatus', {
        id: this.taskId,
        status: 'done'
      } )
    },
    cancel() {
      this.$store.commit('changeStatus', {
        id: this.taskId,
        status: 'cancelled'
      } )
    }
  },



  components: {AppStatus}
}
// Взять в работу: Выполняется  badge.warning  inprogress
// Завершить: Завершён  primary
// Отменить: Отменён  danger

// this.$store.commit('addTask', this.dataForm)


</script>

<style scoped>

</style>


