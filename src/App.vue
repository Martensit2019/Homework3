<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view> 
   
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
// import Tasks from './views/Tasks'

export default {
  components: {
    TheNavbar,
    // Tasks
  }
}
</script>

<style>

</style>
