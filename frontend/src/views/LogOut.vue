
<template>

<!-- <div class="first">
  <div class="container1">
      <br>
      <br>
    <div class="card1">
      <div class="card-header">
      <h2>your email is: {{ email }}   id {{id}}</h2>
      </div>
      <div class="card-body">
        <h2>your email is: {{ email }}   id {{id}}</h2>
        <h1 class="card-title"> {{ username }} from here you can lougout </h1>
        <h1 class="card-text">see you next time and thank you for your time</h1>
        <button @click="logout" class="btn btn-primary btn-block mb-4" id="log">logout</button>  
        </div>
    </div>
  </div>
</div>   -->
<div class="card1">
<div class="card text-dark bg-success mb-3" style="max-width: 19rem;">
  <div class="card-header">lougout</div>
  <div class="card-body">
    <!-- <h5 class="card-title">Info card title</h5> -->
    <p class="card-text">see you next time and thank you for your time.</p>
    <button @click="logout" class="btn btn-primary btn-block mb-4" id="log">logout</button>
  </div>
</div>
</div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'LogOut',
  data() {
    return {
      username: '',
      email: '',
      id:''
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/users/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.username  =  res.data.user.username ;
        this.email = res.data.user.email ;
        this.id= res.data.user.id
      }).catch((error) => {
          console.log(error);
        })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>

<style>

.card1{
margin-left:600px;
margin-top:200px
}

/* #log{
  margin-left:320px
} */
</style>