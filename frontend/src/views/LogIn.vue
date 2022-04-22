<template>

<section class="vh-100 bg-image new" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
<div class="container1" >
<div class="card" style="border-radius: ">
            <div class="card-body p-7">
    <label for="uname" style="margin:0 ; padding:0"><b>Username</b></label>
    <input type="text" placeholder="Enter Username"  v-model="username" name="uname" required>

    <label for="psw" style="margin:0 ; padding:0"><b>Password</b></label>
    <input type="password"  placeholder="Enter Password"  v-model="password" name="psw" required>
        
     <button @click="login" class="btn btn-primary">login</button>
    {{ error }}
    </div>
    </div>
  </div>
  </section>
  
</template>;


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

<style>
form {border: 3px solid #f1f1f1;}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}



.container1 {
  text-align: center;
  margin-left:460px ;
  width: 40%;
  border-radius: 0%;
}



/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>