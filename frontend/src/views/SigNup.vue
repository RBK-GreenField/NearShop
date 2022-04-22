<template>
    
  <!-- <div class = "w-25 p-3  offset-5"  style = "padding: 100px 100px 10px;">
<div class="input-group">
    NAME:     <input  type="text" v-model="username"  class="form-control" /> <br/>
    EMAIL:    <input type="text" v-model="email" class="form-control" /> <br/>
    adresss:  <input type="text" v-model="address" class="form-control" /> <br/>
    PASSWORD: <input type="password" v-model="password"  class="form-control" /> <br/>
    phone:    <input type="text" v-model="phone"  class="form-control" /> <br/>
    <button @click="signup" class="btn btn-primary" >signup</button>
    {{ error }}
    </div>
    </div> -->

 
<section class="vh-100 bg-image" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3" >
    <div class="container h-100" >
      <div class="row d-flex justify-content-center align-items-center h-50">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 10px;">
            <div class="card-body p-7">
              <h2 class="text-uppercase text-center mb-5">Signup</h2>
              <form>
                <div class="form-outline mb-4" >
                <label class="form-label" for="username" style="margin:0 ; padding:0">Your userName</label>
                  <input type="text" v-model="username"  class="form-control form-control-lg"  />
                  
                </div>

                <div class="form-outline mb-4">
                 <label class="form-label" for="form3Example3cg" style="margin:0 ; padding:0">Your Email</label>
                  <input type="email"  v-model="email"  class="form-control form-control-lg" />
                 
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cg"  style="margin:0 ; padding:0">Password</label>
                  <input type="password" v-model="password"  class="form-control form-control-lg" />
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cdg"  style="margin:0 ; padding:0">Your Phone</label>
                  <input type="phone" v-model="phone"  class="form-control form-control-lg" />
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cdg"  style="margin:0 ; padding:0">Your Address</label>
                  <input type="phone" v-model="address"  class="form-control form-control-lg" />
                </div>
                <div class="d-flex justify-content-center">
                  <button @click="signup" class="btn btn-primary" >signup</button>
                  {{ error }}
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>;


<script>
import axios from 'axios';

export default {
  name: 'SigNup',
  data() {
    return {
      email: '',
      username:'',
      address:'',
      phone:'',
      password: '',
      error: '',
    }
  },
  methods: {
    signup() {
      let newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        phone:this.phone,
        address:this.address
      }
      axios.post('http://localhost:3000/api/users/signup', newUser)
        .then((res) => {
          
          this.$router.push('/login');
          console.log(res)
        }).catch((error) => {
          console.log(error);
        });
    }
    
  }

}
</script>
<style>
.gradient-custom-3 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}
</style>