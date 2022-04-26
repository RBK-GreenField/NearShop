<template>
  <div>
  <NavBar/>
  <router-view/>
  <Footer/>
  </div>
</template>


<script>
import NavBar from './components/NavBar'
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
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

</style>