<template>
  <section class="vh-100" >
    <form action="action_page.php" style="border:1px solid #ccc">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    
    <hr>
   <div v-if="!image" style="display: flex">
                        <h6>Select profile image</h6>
                        <input type="file" @change="onFileChange" />
                      </div>
                      <div v-else>
                         <img :src="image" /> 

                        <button @click="removeImage">change photo</button>
                      </div>
    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter username" name="username" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="adress"><b>Adress</b></label>
    <input type="text" placeholder="Enter adress" name="adress" required>

    <label for="phone number"><b>Phone number</b></label>
    <input type="text" placeholder="Enter phone number" name="phone number" required>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

   <div class="pt-1 mb-4">
                      <button
                        @click="signup"
                        class="btn btn-dark btn-lg btn-block"
                        type="button"
                      >
                        SigNup
                      </button>
                      {{ error }}
                    </div>
  </div>
   
</form>
  </section>
</template>
;

<script>
import axios from "axios";

export default {
  name: "SigNup",
  data() {
    return {
      email: "",
      username: "",
      address: "",
      phone: "",
      password: "",
      image: "",
      error: "",
    };
  },
  methods: {
    signup() {
      let newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        image: this.image,
        phone: this.phone,
        address: this.address,
      };
      axios
        .post("http://localhost:3000/api/users/signup", newUser)
        .then((res) => {
          this.$router.push("/login");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.image = "";
    },
  },
};
</script>
<style>

</style>

<style>

img {
  width: 30%;
  height: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
}
* {box-sizing: border-box}

/* Full-width input fields */
  input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
img {
  width: 50%;
  height: 50%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}
/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
    width: 100%;
  }
}
</style>
