<template>
  <div>
    <button @click="logout">logout</button>
    <h1>HELLO {{ username }}</h1>
    <h2>your email is: {{ email }}   id {{id}}</h2>
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