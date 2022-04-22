<template>
<section class="vh-100 bg-image" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
<div class="container" >
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username"  v-model="username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password"  placeholder="Enter Password"  v-model="password" name="psw" required>
        
     <button @click="login" class="btn btn-primary">login</button>
    {{ error }}
    
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

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
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