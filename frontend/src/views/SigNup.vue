<template>
  <div>
    NAME: <input type="text" v-model="username" /> <br/>
    EMAIL: <input type="text" v-model="email" /> <br/>
    adresss: <input type="text" v-model="adress" /> <br/>
    PASSWORD: <input type="password" v-model="password" /> <br/>
    phone: <input type="text" v-model="phone" /> <br/>

    <button @click="signup">signup</button>
    {{ error }}
  </div>
</template>;


<script>
import axios from 'axios';

export default {
  name: 'SigNup',
  data() {
    return {
      email: '',
      username:'',
      adress:'',
      Phone:'',
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
        Phone:this.Phone,
        adress:this.adress
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