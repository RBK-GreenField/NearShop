<template>
  <div>
  <NavBar/>
  <Footer/>
  <router-view/>
  </div>
</template>


<script>
import NavBar from './views/NavBar'
import Footer from './views/Footer.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    
}
}
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.min.css'
</style>