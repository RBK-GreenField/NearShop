<template>
  <div>
    username: <input type="text" v-model="username"> <br/>
    PASSWORD: <input type="password" v-model="password"> <br/>
    <button @click="login">login</button>
    {{ error }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LogIn',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      let user = {
        username: this.username,
        password: this.password
      }
      axios.post('http://localhost:3000/api/users/login', user)
        .then((res) => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/');
          }
        }).catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>