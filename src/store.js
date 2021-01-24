import { createStore } from 'vuex'

 export default createStore({
   state() {
     return {
       counterOfActiveTasks: 0,
      //  tasks: []
       tasks: [
         {
           id: 1,
           title: 'Пройти основы Vue.js',
           date: new Date(2021, 0, 6).toLocaleDateString(),
           descr: 'Это описание задачи',
           status: 'done'
         },
         {
          id: 2,
          title: 'Познакомиться с Vue CLI',
          date: new Date(2021, 0, 14).toLocaleDateString(),
          descr: 'Это описание задачи',
          status: 'cancelled'
        },
        {
         id: 3,
         title: 'Доделать курсовую №3',
         date: new Date(2021, 0, 26).toLocaleDateString(),
         descr: 'Это описание задачи',
         status: 'pending'
       },
       {
        id: 4,
        title: 'Отдохнуть',
        date: new Date(2021, 1, 14).toLocaleDateString(),
        descr: 'Это описание задачи',
        status: 'active'
      }
       ]
     }
   },
   mutations: {
     addTask(state, task){
       state.tasks.push({
        id: task.id,
        title: task.title,
        date: task.date,
        descr: task.descr,
        status: (new Date(task.date).getTime() - task.id) < 0 ? 'cancelled' : 'active'        
       })
     },
     changeStatus(state, status){
      console.log('taskId -->', status.id)
      let currentStatus = (state.tasks.find(task => task.id == status.id)).status
      // проверка статуса до обновления
      console.log('currentStatus -->', currentStatus)
      currentStatus = status.status
      // проверка статуса после обновления
      console.log('currentStatus2 -->', currentStatus)
     }
   }
 })