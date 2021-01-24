<template>
  <form class="card" @submit="goToTasks">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="descr"></textarea>
    </div>

    <!-- <button class="btn primary">Создать</button> -->
    <button class="btn primary" :disabled="title.length < 5 || descr.length < 5">Создать</button>
  </form>
</template>


<script>
export default {
  data () {
    return {
      arr: [],
      title: '',
      date: '',
      descr: '',
      dataForm: {}
    }
       
  },
  methods: {
    goToTasks() {
      this.dataForm.id = Date.now()
      this.dataForm.title = this.title
      this.dataForm.date = this.date
      this.dataForm.descr = this.descr
      this.$router.push('/tasks')
      // console.log(this.arr)
      this.$store.commit('addTask', this.dataForm)
      // console.log(this.dataForm)  
     }
  },
  computed: {


  //   isValid() {
  //     return this.descr !== ''
  //   }
  }
}
</script>