<template>
  <div>
  <NavBar/>
  <router-view/>
  </div>
</template>


<script>
import NavBar from './views/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.min.css'
</style>