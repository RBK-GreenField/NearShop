<template>
<h1>Login</h1>
<!-- <section class="vh-100 bg-image new" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
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
  </section> -->
  

  <section class="vh-100" id="log">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" id="connection">
            <p class="lead fw-normal mb-0 me-3">log in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address"  v-model="username" name="uname"/>
            <label class="form-label" for="form3Example3">username</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" v-model="password"/>
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          

          <div class="text-center text-lg-start mt-4 pt-2">
            <button  @click="login" type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;" id="login">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                class="link-danger">Register</a></p>
          </div>

        </form>
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
h1{
  text-align:center
}
    /* .rounded-t-5 {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }



    @media (min-width: 992px) {
      .rounded-tr-lg-0 {
        border-top-right-radius: 0;
      }

      .rounded-bl-lg-5 {
        border-bottom-left-radius: 0.5rem;
      }
    }*/

    #login{
      margin-left:200px
    } 
 .divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}

#log{
  margin-top:100px;
}

#connection{
  margin-left:15%
}


/* form {border: 3px solid #f1f1f1;}
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
/* @media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
} */ 
 </style>